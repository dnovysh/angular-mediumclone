import {PopularTagType} from "src/app/shared/types/popular-tag.type";

export interface PopularTagsStateItnterface {
  data: PopularTagType[] | null,
  error: string | null,
  isLoading: boolean
}
