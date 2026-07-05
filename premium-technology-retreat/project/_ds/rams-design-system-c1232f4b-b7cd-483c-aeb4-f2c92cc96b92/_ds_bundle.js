/* @ds-bundle: {"format":3,"namespace":"RAMSDesignSystem_c1232f","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Dial","sourcePath":"components/controls/Dial.jsx"},{"name":"Slider","sourcePath":"components/controls/Slider.jsx"},{"name":"Toggle","sourcePath":"components/controls/Toggle.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"LcdScreen","sourcePath":"components/display/LcdScreen.jsx"},{"name":"Led","sourcePath":"components/display/Led.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Card","sourcePath":"components/surface/Card.jsx"},{"name":"Grille","sourcePath":"components/surface/Grille.jsx"},{"name":"Panel","sourcePath":"components/surface/Panel.jsx"},{"name":"SectionLabel","sourcePath":"components/surface/SectionLabel.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"1d799bcd52b2","components/buttons/IconButton.jsx":"c33f227240e3","components/controls/Dial.jsx":"a15670f8af4c","components/controls/Slider.jsx":"83bbca6ff439","components/controls/Toggle.jsx":"5715897997db","components/display/Badge.jsx":"3c4832558161","components/display/LcdScreen.jsx":"10a644b0ad11","components/display/Led.jsx":"3e5949c3f434","components/display/Tag.jsx":"8d2c6986f14a","components/surface/Card.jsx":"13e4e6faf267","components/surface/Grille.jsx":"c6adeae98f1d","components/surface/Panel.jsx":"5cfb017f71fe","components/surface/SectionLabel.jsx":"c33656a6e4ea","image-slot.js":"9309434cb09c","ui_kits/console/AudioDevice.jsx":"9b353460f719","ui_kits/console/ClockDevice.jsx":"668db7673cd8","ui_kits/console/ControlsDevice.jsx":"dab31c36407c","ui_kits/console/FanDevice.jsx":"0399fc47076a","ui_kits/console/TopBar.jsx":"82cbaece8da0","ui_kits/console/TunerDevice.jsx":"7bd7688f0691","ui_kits/portfolio/About.jsx":"15f0a642bd2f","ui_kits/portfolio/Contact.jsx":"0f9326ea2967","ui_kits/portfolio/Hero.jsx":"deffab9d9928","ui_kits/portfolio/Philosophy.jsx":"2ba29339a0aa","ui_kits/portfolio/Works.jsx":"d097465905b6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RAMSDesignSystem_c1232f = window.RAMSDesignSystem_c1232f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RAMS physical button. Renders a <button> by default, or an <a> when
 * `href` is set. Styling comes entirely from the `.rams-btn` skin in
 * base/components.css (shipped via styles.css).
 */
function Button({
  variant = 'default',
  size = 'md',
  pill = false,
  block = false,
  mono = false,
  icon = null,
  iconRight = null,
  href,
  as,
  className = '',
  children,
  ...rest
}) {
  const classes = ['rams-btn', variant === 'orange' && 'rams-btn--orange', variant === 'ghost' && 'rams-btn--ghost', size === 'sm' && 'rams-btn--sm', size === 'lg' && 'rams-btn--lg', pill && 'rams-btn--pill', block && 'rams-btn--block', mono && 'rams-btn--mono', className].filter(Boolean).join(' ');
  const Tag = as || (href ? 'a' : 'button');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes,
    href: href
  }, rest), icon, children != null && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Round, recessed icon control — power / grid / more affordances and
 * toolbar actions. Always pass `label` for accessibility.
 */
function IconButton({
  variant = 'default',
  size = 'md',
  label,
  className = '',
  children,
  ...rest
}) {
  const classes = ['rams-icon-btn', variant === 'orange' && 'rams-icon-btn--orange', size === 'sm' && 'rams-icon-btn--sm', size === 'lg' && 'rams-icon-btn--lg', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: classes,
    "aria-label": label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/controls/Dial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Rotary dial / knob. Presentational rotation from `value`, with
 * vertical-drag interaction (drag up to increase) when `onChange` is set.
 */
function Dial({
  value = 50,
  min = 0,
  max = 100,
  onChange,
  variant = 'default',
  size = 'md',
  label,
  className = '',
  ...rest
}) {
  const range = max - min || 1;
  const pct = Math.max(0, Math.min(1, (value - min) / range));
  const angle = -135 + pct * 270;
  const drag = React.useRef(null);
  const onPointerDown = e => {
    if (!onChange) return;
    drag.current = {
      y: e.clientY,
      value
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = e => {
    if (!drag.current || !onChange) return;
    const dy = drag.current.y - e.clientY;
    let next = drag.current.value + dy / 150 * range;
    next = Math.max(min, Math.min(max, next));
    onChange(next);
  };
  const onPointerUp = () => {
    drag.current = null;
  };
  const classes = ['rams-dial', variant === 'orange' && 'rams-dial--orange', size === 'sm' && 'rams-dial--sm', size === 'lg' && 'rams-dial--lg', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes,
    style: {
      transform: `rotate(${angle}deg)`
    },
    role: "slider",
    "aria-label": label,
    "aria-valuenow": Math.round(value),
    "aria-valuemin": min,
    "aria-valuemax": max,
    onPointerDown: onPointerDown,
    onPointerMove: onPointerMove,
    onPointerUp: onPointerUp
  }, rest));
}
Object.assign(__ds_scope, { Dial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Dial.jsx", error: String((e && e.message) || e) }); }

// components/controls/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horizontal slider with an orange fill and a physical thumb. Controlled
 * via `value` + `onChange`.
 */
function Slider({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  className = '',
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, (value - min) / (max - min || 1) * 100));
  return /*#__PURE__*/React.createElement("div", {
    className: ['rams-slider', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange && onChange(Number(e.target.value))
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "rams-slider__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rams-slider__fill",
    style: {
      width: pct + '%'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "rams-slider__thumb",
    style: {
      left: pct + '%'
    },
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Slider.jsx", error: String((e && e.message) || e) }); }

// components/controls/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sliding pill switch for binary state. Works controlled (`checked` +
 * `onChange`) or uncontrolled (`defaultChecked`).
 */
function Toggle({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  label,
  className = '',
  ...rest
}) {
  const classes = ['rams-toggle', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: classes,
    "aria-label": label,
    style: disabled ? {
      opacity: 0.5,
      cursor: 'not-allowed'
    } : undefined
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "rams-toggle__track",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "rams-toggle__thumb",
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small mono status label. Variants: neutral, orange, lcd (sage), outline.
 */
function Badge({
  variant = 'default',
  className = '',
  children,
  ...rest
}) {
  const classes = ['rams-badge', variant !== 'default' && `rams-badge--${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/LcdScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Recessed sage LCD panel. Compose rows as children, or pass `value` +
 * `unit` (+ optional `right`) for the common single-readout case.
 * `header` renders a small mono caption.
 */
function LcdScreen({
  header,
  value,
  unit,
  right,
  variant = 'default',
  scanlines = false,
  className = '',
  children,
  ...rest
}) {
  const classes = ['rams-lcd', variant === 'dark' && 'rams-lcd--dark', scanlines && 'rams-lcd--scanlines', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), header && /*#__PURE__*/React.createElement("div", {
    className: "rams-lcd__header"
  }, header), children != null ? children : /*#__PURE__*/React.createElement("div", {
    className: "rams-lcd__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rams-lcd__readout"
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    className: "rams-lcd__unit"
  }, unit)), right));
}
Object.assign(__ds_scope, { LcdScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/LcdScreen.jsx", error: String((e && e.message) || e) }); }

// components/display/Led.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Indicator lamp. Off by default (dark glass); lit with a soft glow when
 * `on`. Orange by default, green for "ready/ok" semantics.
 */
function Led({
  on = false,
  color = 'orange',
  size = 'md',
  className = '',
  ...rest
}) {
  const classes = ['rams-led', on && 'is-on', color === 'green' && 'rams-led--green', size === 'lg' && 'rams-led--lg', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest));
}
Object.assign(__ds_scope, { Led });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Led.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill tag — a quiet metadata chip. Pass `led` to prepend a status lamp.
 */
function Tag({
  led = false,
  ledOn = false,
  ledColor = 'orange',
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['rams-tag', className].filter(Boolean).join(' ')
  }, rest), led && /*#__PURE__*/React.createElement(__ds_scope.Led, {
    on: ledOn,
    color: ledColor
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/surface/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Lighter content card on a white surface. `interactive` adds hover lift. */
function Card({
  interactive = false,
  className = '',
  children,
  ...rest
}) {
  const classes = ['rams-card', interactive && 'rams-card--interactive', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/Card.jsx", error: String((e && e.message) || e) }); }

// components/surface/Grille.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Perforated grille panel (speaker / vent motif). Size it with width/height
 * via `style`. `pattern` dots|square, `shape` rect|round, `tone` light|charcoal.
 */
function Grille({
  pattern = 'dots',
  shape = 'rect',
  tone = 'light',
  className = '',
  style,
  ...rest
}) {
  const classes = ['rams-grille', pattern === 'square' && 'rams-grille--square', shape === 'round' && 'rams-grille--round', tone === 'charcoal' && 'rams-grille--charcoal', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes,
    style: style
  }, rest));
}
Object.assign(__ds_scope, { Grille });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/Grille.jsx", error: String((e && e.message) || e) }); }

// components/surface/Panel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Device shell / content surface. The base container of the system.
 * Variants: default (raised shell), inset (recessed), raised (deep
 * device elevation), dark (charcoal). Pass `brand`/`model` to render a
 * BRAUN-style nameplate footer.
 */
function Panel({
  variant = 'default',
  title,
  brand,
  model,
  className = '',
  children,
  ...rest
}) {
  const classes = ['rams-panel', variant === 'inset' && 'rams-panel--inset', variant === 'raised' && 'rams-panel--raised', variant === 'dark' && 'rams-panel--dark', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), title && /*#__PURE__*/React.createElement("h3", {
    className: "rams-panel__title"
  }, title), children, (brand || model) && /*#__PURE__*/React.createElement("div", {
    className: "rams-nameplate",
    style: {
      marginTop: 'var(--rams-space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rams-nameplate__brand"
  }, brand || 'BRAUN'), /*#__PURE__*/React.createElement("span", {
    className: "rams-nameplate__model"
  }, model)));
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/Panel.jsx", error: String((e && e.message) || e) }); }

// components/surface/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mono eyebrow with an optional index number and a short rule — the
 * section marker used across RAMS layouts ("01 — SELECTED WORKS").
 */
function SectionLabel({
  num,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['rams-section-label', className].filter(Boolean).join(' ')
  }, rest), num != null && /*#__PURE__*/React.createElement("span", {
    className: "rams-section-label__num"
  }, num), /*#__PURE__*/React.createElement("span", {
    className: "rams-section-label__line",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "rams-section-label__text"
  }, children));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/console/AudioDevice.jsx
try { (() => {
/* Audio — charcoal speaker grille, play/pause, volume slider. */
function AudioDevice() {
  const {
    Panel,
    Grille,
    Slider,
    Button,
    Badge
  } = window.RAMSDesignSystem_c1232f;
  const {
    useState
  } = React;
  const [vol, setVol] = useState(65);
  const [playing, setPlaying] = useState(true);
  const Play = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 4v16l13-8z"
  }));
  const Pause = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "4",
    width: "4",
    height: "16",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "4",
    width: "4",
    height: "16",
    rx: "1"
  }));
  return /*#__PURE__*/React.createElement(Panel, {
    model: "audio 1"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: playing ? 'orange' : 'default'
  }, playing ? 'PLAYING' : 'PAUSED'), /*#__PURE__*/React.createElement(Badge, {
    variant: "lcd"
  }, "STEREO")), /*#__PURE__*/React.createElement(Grille, {
    pattern: "square",
    tone: "charcoal",
    style: {
      height: 88,
      borderRadius: 'var(--rams-r-md)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "orange",
    onClick: () => setPlaying(p => !p),
    icon: playing ? /*#__PURE__*/React.createElement(Pause, null) : /*#__PURE__*/React.createElement(Play, null),
    "aria-label": "Play / pause"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Slider, {
    value: vol,
    onChange: setVol
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--rams-font-mono)',
      fontSize: 12,
      color: 'var(--rams-text-muted)',
      width: 30,
      textAlign: 'right'
    }
  }, Math.round(vol))));
}
window.AudioDevice = AudioDevice;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/AudioDevice.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/ClockDevice.jsx
try { (() => {
/* Clock — live time on a green-lit LCD; alarm toggle. */
function ClockDevice() {
  const {
    Panel,
    LcdScreen,
    Toggle,
    Led
  } = window.RAMSDesignSystem_c1232f;
  const {
    useState,
    useEffect
  } = React;
  const [now, setNow] = useState(new Date());
  const [alarm, setAlarm] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  return /*#__PURE__*/React.createElement(Panel, {
    model: "clock 1"
  }, /*#__PURE__*/React.createElement(LcdScreen, {
    header: "Local Time"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rams-lcd__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rams-lcd__readout"
  }, hh, ":", mm, /*#__PURE__*/React.createElement("span", {
    className: "rams-lcd__unit"
  }, ss)), /*#__PURE__*/React.createElement(Led, {
    on: true,
    color: "green"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--rams-font-mono)',
      fontSize: 11,
      letterSpacing: '0.06em',
      color: 'var(--rams-text-muted)'
    }
  }, "Alarm \xB7 7:09"), /*#__PURE__*/React.createElement(Toggle, {
    checked: alarm,
    onChange: e => setAlarm(e.target.checked),
    label: "Alarm"
  })));
}
window.ClockDevice = ClockDevice;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/ClockDevice.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/ControlsDevice.jsx
try { (() => {
/* Controls — standby/lock switches, status, action; a friendly LCD line. */
function ControlsDevice() {
  const {
    Panel,
    Toggle,
    Led,
    Button,
    LcdScreen,
    Tag
  } = window.RAMSDesignSystem_c1232f;
  const {
    useState
  } = React;
  const [standby, setStandby] = useState(true);
  const [lock, setLock] = useState(false);
  const row = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  return /*#__PURE__*/React.createElement(Panel, {
    model: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement(Tag, {
    led: true,
    ledOn: !standby
  }, standby ? 'standby' : 'active'), /*#__PURE__*/React.createElement(Button, {
    variant: "orange",
    size: "sm"
  }, "Action")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--rams-hairline)',
      margin: '14px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...row,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--rams-text-muted)'
    }
  }, "Standby"), /*#__PURE__*/React.createElement(Toggle, {
    checked: standby,
    onChange: e => setStandby(e.target.checked),
    label: "Standby"
  })), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--rams-text-muted)'
    }
  }, "Lock"), /*#__PURE__*/React.createElement(Toggle, {
    checked: lock,
    onChange: e => setLock(e.target.checked),
    label: "Lock"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--rams-hairline)',
      margin: '14px 0'
    }
  }), /*#__PURE__*/React.createElement(LcdScreen, null, /*#__PURE__*/React.createElement("div", {
    className: "rams-lcd__row"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--rams-font-mono)',
      fontWeight: 600,
      letterSpacing: '0.1em',
      fontSize: 13,
      color: lock ? 'var(--rams-lcd-ink)' : '#3a7d3f'
    }
  }, lock ? 'LOCKED' : 'GOOD LUCK'), /*#__PURE__*/React.createElement(Led, {
    on: !lock,
    color: "green"
  }))));
}
window.ControlsDevice = ControlsDevice;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/ControlsDevice.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/FanDevice.jsx
try { (() => {
/* Ventilator — round perforated grille spins up on power; speed dial. */
function FanDevice() {
  const {
    Panel,
    Grille,
    Toggle,
    Dial,
    Tag
  } = window.RAMSDesignSystem_c1232f;
  const {
    useState
  } = React;
  const [on, setOn] = useState(true);
  const [speed, setSpeed] = useState(45);
  return /*#__PURE__*/React.createElement(Panel, {
    model: "ventilator 1"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement(Grille, {
    pattern: "dots",
    shape: "round",
    style: {
      width: 124,
      height: 124,
      opacity: on ? 1 : 0.45,
      transition: 'opacity .3s var(--rams-ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    led: true,
    ledOn: on
  }, on ? 'running' : 'standby'), /*#__PURE__*/React.createElement(Dial, {
    size: "sm",
    value: speed,
    onChange: setSpeed,
    label: "Speed"
  }), /*#__PURE__*/React.createElement(Toggle, {
    checked: on,
    onChange: e => setOn(e.target.checked),
    label: "Power"
  })));
}
window.FanDevice = FanDevice;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/FanDevice.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/TopBar.jsx
try { (() => {
/* RAMS Hardware Console — top bar with wordmark + chrome controls. */
function TopBar() {
  const {
    IconButton,
    Badge
  } = window.RAMSDesignSystem_c1232f;
  const Power = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2v10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.4 6.6a9 9 0 1 1-12.8 0"
  }));
  const Grid = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7",
    rx: "1"
  }));
  const Dots = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.7"
  }));
  return /*#__PURE__*/React.createElement("header", {
    className: "console-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "console-brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "console-wordmark"
  }, "R", /*#__PURE__*/React.createElement("span", {
    className: "o"
  }, "A"), "MS"), /*#__PURE__*/React.createElement("span", {
    className: "console-sub"
  }, "Hardware Console \xB7 Braun device shell")), /*#__PURE__*/React.createElement("div", {
    className: "console-actions"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "lcd"
  }, "ONLINE"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Power"
  }, /*#__PURE__*/React.createElement(Power, null)), /*#__PURE__*/React.createElement(IconButton, {
    label: "Grid"
  }, /*#__PURE__*/React.createElement(Grid, null)), /*#__PURE__*/React.createElement(IconButton, {
    label: "More"
  }, /*#__PURE__*/React.createElement(Dots, null))));
}
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/TunerDevice.jsx
try { (() => {
/* Tuner — orange tuning dial drives the LCD frequency; FM/AM band select. */
function TunerDevice() {
  const {
    Panel,
    LcdScreen,
    Dial,
    Button,
    Led
  } = window.RAMSDesignSystem_c1232f;
  const {
    useState
  } = React;
  const [freq, setFreq] = useState(98.4);
  const [band, setBand] = useState('FM');
  return /*#__PURE__*/React.createElement(Panel, {
    model: "tuner 1"
  }, /*#__PURE__*/React.createElement(LcdScreen, {
    header: band + ' · Tuner',
    value: freq.toFixed(1),
    unit: "MHz",
    right: /*#__PURE__*/React.createElement(Led, {
      on: true
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Dial, {
    variant: "orange",
    size: "lg",
    value: freq,
    min: 87.5,
    max: 108,
    onChange: setFreq,
    label: "Tuning"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    mono: true,
    size: "sm",
    variant: band === 'FM' ? 'orange' : 'default',
    onClick: () => setBand('FM')
  }, "FM"), /*#__PURE__*/React.createElement(Button, {
    mono: true,
    size: "sm",
    variant: band === 'AM' ? 'orange' : 'default',
    onClick: () => setBand('AM')
  }, "AM")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'right',
      fontFamily: 'var(--rams-font-mono)',
      fontSize: 10,
      letterSpacing: '0.14em',
      color: 'var(--rams-text-subtle)'
    }
  }, "DRAG\xA0DIAL\xA0\u2195")));
}
window.TunerDevice = TunerDevice;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/TunerDevice.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
/* About — dark section: prose + an LCD statistics panel. */
function About() {
  const {
    SectionLabel
  } = window.RAMSDesignSystem_c1232f;
  const stats = [['147', 'Projects'], ['12', 'Years'], ['23', 'Awards'], ['∞', 'Curiosity']];
  return /*#__PURE__*/React.createElement("section", {
    className: "pf-about",
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-section-head"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    num: "01"
  }, "About"), /*#__PURE__*/React.createElement("h2", {
    className: "pf-section-title"
  }, "Crafting experiences at the intersection of function and form.")), /*#__PURE__*/React.createElement("div", {
    className: "pf-about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-about-text"
  }, /*#__PURE__*/React.createElement("p", null, "I'm a ", /*#__PURE__*/React.createElement("strong", null, "design engineer"), " based in Berlin, crafting digital products that respect both human needs and aesthetic principles."), /*#__PURE__*/React.createElement("p", null, "My approach is rooted in ", /*#__PURE__*/React.createElement("strong", null, "industrial design thinking"), " \u2014 every element must earn its place, form follows function, and ", /*#__PURE__*/React.createElement("strong", null, "good design is honest"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "pf-lcd-stats rams-lcd rams-lcd--scanlines"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rams-lcd__header"
  }, "System Statistics"), /*#__PURE__*/React.createElement("div", {
    className: "pf-stats"
  }, stats.map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    className: "pf-stat",
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-stat-v"
  }, v), /*#__PURE__*/React.createElement("div", {
    className: "pf-stat-l"
  }, l)))))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
/* Contact — dark closing section with a copy-email "device" + info cards. */
function Contact() {
  const {
    SectionLabel,
    Badge
  } = window.RAMSDesignSystem_c1232f;
  const {
    useState
  } = React;
  const [copied, setCopied] = useState(false);
  const email = 'hello@rams.design';
  const copy = () => {
    try {
      navigator.clipboard.writeText(email);
    } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  const Arrow = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5l7 7-7 7"
  }));
  return /*#__PURE__*/React.createElement("section", {
    className: "pf-contact",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-section-head"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    num: "04"
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    className: "pf-contact-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-contact-main"
  }, /*#__PURE__*/React.createElement("h2", null, "Let's create something ", /*#__PURE__*/React.createElement("span", null, "meaningful"), " together."), /*#__PURE__*/React.createElement("p", null, "Always interested in new projects, collaborations, or a conversation about craft and the pursuit of simplicity."), /*#__PURE__*/React.createElement("button", {
    className: "pf-email",
    onClick: copy
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-email-text"
  }, copied ? 'Copied to clipboard' : email), /*#__PURE__*/React.createElement("span", {
    className: "pf-email-icon"
  }, /*#__PURE__*/React.createElement(Arrow, null)))), /*#__PURE__*/React.createElement("div", {
    className: "pf-contact-cards"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-contact-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-card-label"
  }, "Location"), /*#__PURE__*/React.createElement("div", {
    className: "pf-card-value"
  }, "Berlin, Germany")), /*#__PURE__*/React.createElement("div", {
    className: "pf-contact-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-card-label"
  }, "Availability"), /*#__PURE__*/React.createElement("div", {
    className: "pf-card-value"
  }, "Open for projects \xB7 Q3 2026")), /*#__PURE__*/React.createElement("div", {
    className: "pf-contact-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-card-label"
  }, "Status"), /*#__PURE__*/React.createElement(Badge, {
    variant: "orange"
  }, "AVAILABLE")))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
/* Hero — wordmark, philosophy line, CTAs, and the rotary deco dial. */
function Hero() {
  const {
    Button
  } = window.RAMSDesignSystem_c1232f;
  const Arrow = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5l7 7-7 7"
  }));
  return /*#__PURE__*/React.createElement("section", {
    className: "pf-hero",
    id: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-hero-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-eyebrow-line"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pf-eyebrow-text"
  }, "Design Engineer / Berlin")), /*#__PURE__*/React.createElement("h1", {
    className: "pf-hero-name"
  }, /*#__PURE__*/React.createElement("span", {
    className: "first"
  }, "Dieter"), /*#__PURE__*/React.createElement("span", {
    className: "last"
  }, "Rams")), /*#__PURE__*/React.createElement("p", {
    className: "pf-hero-philo"
  }, "I believe good design is as little design as possible. Less, but better \u2014 because it concentrates on the essential aspects."), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "orange",
    mono: true,
    href: "#works",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, "View Works"), /*#__PURE__*/React.createElement(Button, {
    mono: true,
    href: "#contact"
  }, "Get in Touch"))), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero-deco"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-deco-circle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-deco-dial"
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Philosophy.jsx
try { (() => {
/* Philosophy — prose + a device "screen" listing the ten principles. */
function Philosophy() {
  const {
    SectionLabel,
    Panel
  } = window.RAMSDesignSystem_c1232f;
  const principles = ['Good design is innovative', 'Good design makes a product useful', 'Good design is aesthetic', 'Good design makes a product understandable', 'Good design is unobtrusive', 'Good design is honest', 'Good design is long-lasting', 'Good design is thorough to the last detail', 'Good design is environmentally friendly', 'Good design is as little design as possible'];
  return /*#__PURE__*/React.createElement("section", {
    className: "pf-philosophy",
    id: "philosophy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-section-head"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    num: "03"
  }, "Philosophy"), /*#__PURE__*/React.createElement("h2", {
    className: "pf-section-title"
  }, "Ten principles that guide every decision.")), /*#__PURE__*/React.createElement("div", {
    className: "pf-philo-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-philo-text"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("em", null, "Good design is honest."), " It does not make a product more innovative, powerful or valuable than it really is."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("em", null, "Good design is long-lasting."), " It avoids being fashionable and therefore never appears antiquated.")), /*#__PURE__*/React.createElement(Panel, {
    variant: "raised",
    className: "pf-principles"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rams-panel--inset pf-principles-screen"
  }, principles.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "pf-principle",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-principle-num"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "pf-principle-text"
  }, p), /*#__PURE__*/React.createElement("span", {
    className: "pf-principle-dot"
  })))))));
}
window.Philosophy = Philosophy;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Philosophy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Works.jsx
try { (() => {
/* Works — bento grid of projects; hover reveals the caption + top rule. */
function Works() {
  const {
    SectionLabel
  } = window.RAMSDesignSystem_c1232f;
  const Icon = ({
    d
  }) => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    dangerouslySetInnerHTML: {
      __html: d
    }
  });
  const works = [{
    cls: 'featured',
    year: '2024',
    name: 'RAMS Design System',
    type: 'Design System',
    d: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>'
  }, {
    cls: 'standard',
    year: '2024',
    name: 'Temporal Interface',
    type: 'Experiment',
    d: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'
  }, {
    cls: 'tall',
    year: '2023',
    name: 'Component Library',
    type: 'Open Source',
    d: '<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>'
  }, {
    cls: 'wide',
    year: '2023',
    name: 'Audio Interface',
    type: 'Product Design',
    d: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>'
  }, {
    cls: 'standard',
    year: '2022',
    name: 'Calculator App',
    type: 'Interface',
    d: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h8M8 14h4"/>'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pf-works",
    id: "works"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-section-head"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    num: "02"
  }, "Selected Works"), /*#__PURE__*/React.createElement("h2", {
    className: "pf-section-title"
  }, "A curated collection of projects that define the practice.")), /*#__PURE__*/React.createElement("div", {
    className: "pf-works-grid"
  }, works.map((w, i) => /*#__PURE__*/React.createElement("div", {
    className: 'pf-work ' + w.cls,
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-work-preview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-work-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: w.d
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pf-work-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-work-year"
  }, w.year), /*#__PURE__*/React.createElement("div", {
    className: "pf-work-name"
  }, w.name), /*#__PURE__*/React.createElement("div", {
    className: "pf-work-type"
  }, w.type))))));
}
window.Works = Works;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Works.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Dial = __ds_scope.Dial;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.LcdScreen = __ds_scope.LcdScreen;

__ds_ns.Led = __ds_scope.Led;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Grille = __ds_scope.Grille;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

})();
