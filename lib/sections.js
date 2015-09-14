Sections = new orion.collection('sections', {
  singularName: 'section',
  pluralName: 'sections',
  link: {
    title: 'Sections'
  },
  tabular: {
    columns: [
      {data: 'order', title: 'Page order', width: '20%'},
      {data: 'title', title: 'Title'}
    ]
  }
});

Sections.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Section title"
  },
  id: {
    type: String,
    label: "Section Id"
  },
  order: {
    type: Number,
    label: "Section order"
  },
  headline: {
    type: String,
    optional: true,
    label: "Headline"
  },
  detail: {
    type: String,
    optional: true,
    label: "More detail",
    autoform: {
      type: 'textarea'
    }
  },
  backgroundColour: {
    type: String,
    autoform: {
      type: "bootstrap-colorpicker"
    },
    label: "Background colour (optional)",
    optional: true
  },
  backgroundImage: orion.attribute('image', {
    label: "Background image (optional)",
    optional: true
  })
}));
