Sections = new orion.collection('sections', {
  singularName: 'section',
  pluralName: 'sections',
  link: {
    title: 'Sections'
  },
  tabular: {
    columns: [
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
  backgroundColor: {
    type: String,
    autoform: {
      type: "bootstrap-colorpicker"
    },
    label: "Background color",
    optional: true
  }
}));
