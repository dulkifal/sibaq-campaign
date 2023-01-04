import {
  l as e,
  y as l,
  C as n,
  a as t,
  b as a,
  A as s,
  c as i,
  d as o,
  e as r,
  N as d,
} from "./vendor.36758340.js";
let c = document.createElement("div");
var u;
let m = new Image();
function p(o) {
  let r = document.createElement("input");
  const [d, p] = e(!1),
    [h, v] = e(null),
    [w, f] = e(null),
    [C, I] = e(null),
    [b, N] = e(null),
    [k, y] = e(null);
  e(null),
    (m.src = "./frame.png"),
    (m.onload = () => {
      v(1);
    });
  let z = new Image();
  (z.src = w),
    (z.onload = () => {
      I(1);
    });
  let E,
    L = document.createElement("canvas"),
    R = L.getContext("2d");
  function A() {
    return t(
      a,
      null,
      k &&
        t(
          "div",
          {
            onClick: () => {
              y(!1);
            },
            className: "preview",
          },
          t("img", { src: b, alt: "", srcset: "" })
        )
    );
  }
  return (
    (L.width = 1e3),
    (L.height = 1e3),
    l(() => {
      h && C
        // ? (R.drawImage(z, 150, 117, 783, 783),
        ? (R.drawImage(z, 100, 100, 783, 783),
          R.drawImage(m, 0, 0, L.width, L.height),
          N(L.toDataURL({ pixelRatio: 3 })))
        : console.log(h, C);
    }, [C]),
    (r.type = "file"),
    (r.onchange = () => {
      let e = r.files[0],
        l = new FileReader();
      l.readAsDataURL(e),
        (l.onload = () => {
          (E = l.result),
            p(!0),
            (u = new n(c, {
              url: E,
              enableOrientation: !0,
              viewport: { height: 368, width :368, type: "circle" },
            }));
        });
    }),
    t(
      a,
      null,
      t("div", {
        style: { backgroundImage: `url(${b || m.src})` },
        className: "Header",
      }),
      t(
        "div",
        { className: "Cont" },
        t("h1", null),
        t(
          "div",
          { className: "Actions" },
          b
            ? t(
                "div",
                null,
                t(
                  "a",
                  { href: b, download: "MDIA Convocation" },
                  t(
                    "button",
                    null,
                    t(s, { size: "30" }),
                    t("span", null, "Download Profile")
                  )
                )
              )
            : t(
                "button",
                {
                  onClick: () => {
                    r.click();
                  },
                },
                t(i, { size: "30" }),
                t("span", null, "Upload photo")
              )
        )
      ),
      t("div", {
        ref: (e) => {
          e && (e.innerHTML = "");
        },
      }),
      t("img", { src: "fzone.jpg", className: "spBanner", alt: "" }),
      t(A, null),
      t(g, { setCroppedImg: f, visible: d, set: p })
    )
  );
}
function g({ visible: e, set: l, setCroppedImg: n }) {
  return t(
    "div",
    { className: e ? "vi" : "hi" },
    t("div", {
      ref: (e) => {
        e && ((e.innerHTML = ""), e.append(c));
      },
      className: "Crop",
    }),
    t(
      "div",
      { className: "Tools" },
      t(
        "button",
        {
          onClick: () => {
            u.destroy(), l(!1);
          },
        },
        t(o, { size: "30" })
      ),
      t(
        "button",
        {
          onClick: () => {
            u.result({ size: { height: 736, width: 736 } }).then((e) => {
              n(e), u.destroy(), l(!1);
            });
          },
        },
        t(r, { size: "30" })
      )
    )
  );
}
d(t(p, null), document.getElementById("app"));
