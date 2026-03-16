export const checksums = {
  "products": "v3.5.0--N46lrz3Cp9NKY3JoI1crrvpGXqNzdc7w5j_ZOwbmEpc"
}
export const checksumsStructure = {
  "products": "n5JQRVnYL0x8Hyos6t0Yj3QCkhLnUhPNPI5qTqJrpvA"
}

export const tables = {
  "products": "_content_products",
  "info": "_content_info"
}

export default {
  "products": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
}