export default {
  name: 'bannerSection',
  type: 'document',
  title: 'Banner Section',
  fields: [
    {
      name: 'images',
      title: 'Banner Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
}
