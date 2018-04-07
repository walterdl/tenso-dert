export function hexToRgbA (hex, opacity = 1) {
  let c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("")
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = "0x" + c.join("")
    return "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + `,${opacity})`
  }

  throw new Error("Bad Hex")
}

export function getTransitionEndEventName() {
  var t, el = document.createElement("fakeelement")

  var transitions = {
    "transition": "transitionend",
    "OTransition": "oTransitionEnd",
    "MozTransition": "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  var transitionSelected = false

  for (t in transitions){
    if (el.style[t] !== undefined){
      transitionSelected = transitions[t]
    }
  }

  return transitionSelected
}

export function addClassName(element, className) {
  var classes = element.className.split(" ")

  if (classes.indexOf(className) === -1) {
    element.className = element.className + " " + className
  }
}

export function removeClassName(element, className) {
  var classes = element.className.split(" ")

  let classNameIndex = classes.indexOf(className)

  if (classNameIndex !== -1) {
    classes.splice(classNameIndex, 1)
    element.className = classes.join(" ")
  }
}
