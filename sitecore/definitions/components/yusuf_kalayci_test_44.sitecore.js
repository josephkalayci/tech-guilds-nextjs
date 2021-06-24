import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "yusuf_kalayci_test_44",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "header_0",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "image_1",
      type: CommonFieldTypes.Image
    }, {
      name: "paragraph_2",
      type: CommonFieldTypes.SingleLineText
    }]
  });
}
