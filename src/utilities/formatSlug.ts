import { FieldHook } from 'payload/types';

const sets = [
  { to: "a", from: "[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶἀ]" },
  { to: "c", from: "[ÇĆĈČ]" },
  { to: "d", from: "[ÐĎĐÞ]" },
  { to: "e", from: "[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]" },
  { to: "g", from: "[ĜĞĢǴ]" },
  { to: "h", from: "[ĤḦ]" },
  { to: "i", from: "[ÌÍÎÏĨĪĮİỈỊ]" },
  { to: "j", from: "[Ĵ]" },
  { to: "ij", from: "[Ĳ]" },
  { to: "k", from: "[Ķ]" },
  { to: "l", from: "[ĹĻĽŁ]" },
  { to: "m", from: "[Ḿ]" },
  { to: "n", from: "[ÑŃŅŇ]" },
  { to: "o", from: "[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]" },
  { to: "oe", from: "[Œ]" },
  { to: "p", from: "[ṕ]" },
  { to: "r", from: "[ŔŖŘ]" },
  { to: "s", from: "[ßŚŜŞŠȘ]" },
  { to: "t", from: "[ŢŤ]" },
  { to: "u", from: "[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]" },
  { to: "w", from: "[ẂŴẀẄ]" },
  { to: "x", from: "[ẍ]" },
  { to: "y", from: "[ÝŶŸỲỴỶỸ]" },
  { to: "z", from: "[ŹŻŽ]" },
  { to: "-", from: "[·/_,:;']" },
];

const format = (val: string): string => val.replace(/ /g, '-').replace(/[^\w-]+/g, '').toLowerCase();

const formatSlug = (fallback: string): FieldHook => ({ operation, value, originalDoc, data }) => {
  if (typeof value === 'string') {
    sets.forEach((set) => {
      value = value.replace(new RegExp(set.from, "gi"), set.to);
    });
    return format(value);
  }

  if (operation === 'create') {
    const fallbackData = (data && data[fallback]) || (originalDoc && originalDoc[fallback]);

    if (fallbackData && typeof fallbackData === 'string') {
      let value = fallbackData
        sets.forEach((set) => {
            value = value.replace(new RegExp(set.from, "gi"), set.to);
          });
      return format(value);
    }
  }

  return value;
};

export default formatSlug;
