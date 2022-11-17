export type ImageType = {
  data: {
    id: number,
    attributes: {
      alternativeText: null
      caption: null
      createdAt: string
      ext: string
      formats: any
      hash: string
      height: number
      mime: string
      name: string
      previewUrl: null | string
      provider: string
      provider_metadata: any
      size: number
      updatedAt: string
      url: string
      width: number
    }
  }
}


export type StrapiArrayType<T> = {
  data: Array<{
    id: number,
    attributes: {
      createdAt: string,
      publishedAt: string,
      updatedAt: string
    } & T
  }>
  meta: {
    pagination: {
      page: number
      pageCount: number
      pageSize: number
      total: number
    }
  }
}

export type StrapiType<T> = {
  data: {
    id: number,
    attributes: StrapiAttributesType<T>
  }
  meta: {
    pagination: {
      page: number
      pageCount: number
      pageSize: number
      total: number
    }
  }
}

export type ArticleType = {
  Title: string,
  Description: string,
  Image: ImageType
}

export type StrapiAttributesType<T> = {
  createdAt: string,
  publishedAt: string,
  updatedAt: string
} & T

export type ArticlesType = StrapiArrayType<ArticleType>
export type StrapiArticleType = StrapiType<ArticleType>