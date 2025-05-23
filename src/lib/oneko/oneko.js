// https://github.com/breqdev/breq.dev/blob/main/utils/oneko.js
// oneko.js: https://github.com/adryd325/oneko.js (webring variant)

let frozen = false
const path = "/Oneko/oneko-onion-Sheet.gif"

let scale = 2


export async function freezeOneko(f) {
    frozen = f
}

export async function oneko(startX, startY, startAlert, nekoSites) {
    if (typeof window === "undefined") {
        return
    }

    const isReducedMotion =
        window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
        window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true
    if (isReducedMotion) return  

    const nekoEl = document.createElement("div")

    let nekoPosX = startX
    let nekoPosY = startY

    let mousePosX = 0
    let mousePosY = 0

    try {
        const searchParams = location.search
        .replace("?", "")
        .split("&")
        .map((keyvaluepair) => keyvaluepair.split("="))

        function posFind(string) {
            const result = searchParams.find((a) => a[0] == string)
            if (result && result[1]) return parseInt(result[1])
        }

        nekoPosX = posFind("catx") || startX
        nekoPosY = posFind("caty") || startY
        mousePosX = posFind("catdx") || 0
        mousePosY = posFind("catdy") || 0
    } catch (e) {
        console.error("oneko.js: failed to parse query params.")
        console.error(e)
    }

    function onClick(event) {
        const target = event.target.closest("A");
        if (target === null || !target.getAttribute("href")) {
            return
        }
        let newLocation
        try {
            newLocation = new URL(target.href)
        } catch (e) {
            return
        }
        if (!nekoSites.includes(newLocation.host) || newLocation.pathname != "/")
            return;

        newLocation.searchParams.append("catx", Math.floor(nekoPosX));
        newLocation.searchParams.append("caty", Math.floor(nekoPosY));
        newLocation.searchParams.append("catdx", Math.floor(mousePosX));
        newLocation.searchParams.append("catdy", Math.floor(mousePosY));
        event.preventDefault();
        window.location.href = newLocation.toString();
        
    }

    document.addEventListener("click", onClick)

    let frameCount = 0
    let idleTime = 0
    let idleAnimation = null
    let idleAnimationFrame = 0

    const nekoSpeed = (10 * scale)
    const spriteSets = {
        idle: [[-10, 0]],
        alert: [[-12, 0]],
        scratchSelf: [
            [-8, 0],
            [-8, -1],
            [-8, -2],
        ],
        tired: [
            [-11, 0]
        ],
        sleeping: [
            [-9, 0],
            [-9, -1],
        ],
        N: [
            [0, 0],
            [0, -1],
        ],
        NE: [
            [-1, 0],
            [-1, -1],
        ],
        E: [
            [-2, 0],
            [-2, -1],
        ],
        SE: [
            [-3, 0],
            [-3, -1],
        ],
        S: [
            [-4, 0],
            [-4, -1],
        ],
        SW: [
            [-5, 0],
            [-5, -1],
        ],
        W: [
            [-6, 0],
            [-6, -1],
        ],
        NW: [
            [-7, 0],
            [-7, -1],
        ],
    }

    function init() {
        nekoEl.id = "oneko"
        nekoEl.ariaHidden = true
        nekoEl.style.width = "32px"
        nekoEl.style.height = "32px"
        nekoEl.style.position = "fixed"
        nekoEl.style.pointerEvents = "none"
        nekoEl.style.imageRendering = "pixelated"
        nekoEl.style.left = `${nekoPosX - 16}px`
        nekoEl.style.top = `${nekoPosY - 16}px`
        nekoEl.style.zIndex = 2147483647
        nekoEl.style.scale = scale

        let nekoFile = path
        const curScript = document.currentScript
        if (curScript && curScript.dataset.cat) {
            nekoFile = curScript.dataset.cat
        }
        nekoEl.style.backgroundImage = `url(${nekoFile})`

        document.body.appendChild(nekoEl)

        document.addEventListener("mousemove", function (event) {
        if(!frozen) {
            mousePosX = event.clientX
            mousePosY = event.clientY
        } 
        else {
            mousePosX = startX
            mousePosY = startY
        }
        })

        window.requestAnimationFrame(onAnimationFrame)
    }

    let lastFrameTimestamp

    function onAnimationFrame(timestamp) {
        // Stops execution if the neko element is removed from DOM
        if (!nekoEl.isConnected) {
            return
        }
        if (!lastFrameTimestamp) {
            lastFrameTimestamp = timestamp
        }
        if (timestamp - lastFrameTimestamp > 100) {
            lastFrameTimestamp = timestamp
            frame()
        }

        window.requestAnimationFrame(onAnimationFrame)
    }

    function setSprite(name, frame) {
        const sprite = spriteSets[name][frame % spriteSets[name].length]
        nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`
    }

    if (startAlert) {
        console.log("spawning kity")
        setSprite("alert", 0)
        idleTime = 6
    }

    function resetIdleAnimation() {
        idleAnimation = null
        idleAnimationFrame = 0
    }

    function idle() {
        idleTime += 1

        // every ~ 20 seconds
        if (
        idleTime > 10 &&
        Math.floor(Math.random() * 200) == 0 &&
        idleAnimation == null
        ) {
        let avalibleIdleAnimations = ["sleeping", "scratchSelf"]
        
        // i don't have these made for onion
        //if (nekoPosX < 32) {
        //    avalibleIdleAnimations.push("scratchWallW");
        //}
        //if (nekoPosY < 32) {
        //    avalibleIdleAnimations.push("scratchWallN");
        //}
        //if (nekoPosX > window.innerWidth - 32) {
        //    avalibleIdleAnimations.push("scratchWallE");
        //}
        //if (nekoPosY > window.innerHeight - 32) {
        //    avalibleIdleAnimations.push("scratchWallS");
        //}
        idleAnimation =
            avalibleIdleAnimations[
            Math.floor(Math.random() * avalibleIdleAnimations.length)
            ];
        }

        switch (idleAnimation) {
        case "sleeping":
            if (idleAnimationFrame < 8) {
                setSprite("tired", 0);
                break;
            }
            setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
            if (idleAnimationFrame > 192) {
                resetIdleAnimation();
            }
            break;
        // case "scratchWallN":
        // case "scratchWallS":
        // case "scratchWallE":
        // case "scratchWallW":
        case "scratchSelf":
            setSprite(idleAnimation, idleAnimationFrame);
            if (idleAnimationFrame > 9) {
                resetIdleAnimation();
            }
            break;
        default:
            setSprite("idle", 0);
            return;
        }
        idleAnimationFrame += 1;
    }

    function frame() {
        frameCount += 1;
        const diffX = nekoPosX - mousePosX;
        const diffY = nekoPosY - mousePosY;
        const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

        if (distance < nekoSpeed || distance < 48) {
            idle();
            return;
        }

        idleAnimation = null;
        idleAnimationFrame = 0;

        if (idleTime > 1) {
            setSprite("alert", 0);
            // count down after being alerted before moving
            idleTime = Math.min(idleTime, 7);
            idleTime -= 1;
            return;
        }

        let direction;
        direction = diffY / distance > 0.5 ? "N" : "";
        direction += diffY / distance < -0.5 ? "S" : "";
        direction += diffX / distance > 0.5 ? "W" : "";
        direction += diffX / distance < -0.5 ? "E" : "";
        setSprite(direction, frameCount);

        nekoPosX -= (diffX / distance) * nekoSpeed;
        nekoPosY -= (diffY / distance) * nekoSpeed;

        nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
        nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

        nekoEl.style.left = `${nekoPosX - 16}px`;
        nekoEl.style.top = `${nekoPosY - 16}px`;
    }

    init();
}
