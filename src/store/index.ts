import {defineStore} from 'pinia'
import {DocsListType, DocType} from "@/tools/types";
import {mande} from "mande";
import {routes} from "@/tools/routes";

const API = process.env.VUE_APP_URL;
const mandeApi = mande(`${API}`);

export const useDocsStore = defineStore('docs', {
  state: () => ({
    list: null as DocsListType,
    isDocsLoading: false as boolean,
    isError: false as boolean,
    errorText: 'Возможно произошла ошибка или ваш поисковый запрос не корректен. Попробуйте еще раз' as string,
    loadingText: 'Загрузка...' as string,
    emptyText: 'Ничего не найдено' as string,
    currentDoc: null as DocType,
  }),
  getters: {
    hasOpenDoc: (state) => state.currentDoc !== null,
    hasList: (state) => state.list !== null,
  },
  actions: {
    async search(value:string) {
      try {
        const list:DocsListType = value.length > 0
            ? await mandeApi.get(`${routes.get_user_docs}?search=${value}`)
            : await mandeApi.get(`${routes.get_user_docs}`);
        if(list?.length){
          this.list = list;
        } else {
          this.list = null;
          this.isError = true
        }
        this.isDocsLoading = false;
      } catch (error){
        return null
      }
    }
  },
})
