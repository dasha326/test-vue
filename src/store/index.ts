import { defineStore } from 'pinia'
import {DocsListType, DocType} from "@/tools/types";
import {mande} from "mande";

const api = mande(`${process.env.VUE_APP_URL}/user/docs`)

export const useDocsStore = defineStore('docs', {
  state: () => ({
    list: null as DocsListType,
    isDocsLoading: false as boolean,
    isError: false as boolean,
    errorText: 'Возможно произошла ошибка или ваш поисковый запрос не корректен. Попробуйте еще раз' as string,
    loadingText: 'Загрузка...' as string,
    emptyText: 'Ничего не найдено' as string,
    activeDoc: null as DocType
  }),
  getters: {
  },
  actions: {
    async getList(value:string) {
      try {
        const list:DocsListType = await api.get(`?search=${value}`);
        if(list?.length){
          this.list = list;
        } else {
          this.list = null;
          this.isError = true
        }
        this.isDocsLoading = false;
      } catch (error){
        console.error(error)
      }
    }
  },
})
