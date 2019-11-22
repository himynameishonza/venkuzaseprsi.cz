export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "order",
      title: "Order ID",
      type: "number"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }]
    },
    {
      name: "song",
      title: "Song",
      type: "string"
    },
    {
      name: "songURL",
      title: "Song Spotify URL",
      type: "string"
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text"
    },

    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    }
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage"
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};
