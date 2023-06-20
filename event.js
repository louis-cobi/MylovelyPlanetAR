// AFRAME.registerComponent("markerhandler", {
//     init: function () {
//         this.el.addEventListener("click", function (ev, target) {
//             console.log("edward clicked")
//             const userAgent =
//                 navigator.userAgent || navigator.vendor || window.opera

//             if (
//                 (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) ||
//                 navigator.userAgent.includes("Mac")
//             ) {
//                 // Redirection vers l'App Store pour les appareils Apple (iOS)
//                 window.location.href =
//                     "https://apps.apple.com/fr/app/my-lovely-planet/id1573748823"
//             } else if (/android/i.test(userAgent)) {
//                 // Redirection vers le Play Store pour les appareils Android
//                 window.location.href =
//                     "https://play.google.com/store/apps/details?id=com.ImagineComp.ImagineSerie&hl=fr&gl=US"
//             }
//         })
//     },
// })

AFRAME.registerComponent("markerhandler", {
    init: function () {
        const entity = this.el;
        entity.addEventListener("markerFound", function () {
            entity.addEventListener("click", handleClick);
        });
    },
});

function handleClick() {
    console.log("Marker clicked");
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Redirection vers l'App Store pour les appareils Apple (iOS)
        window.location.href = "https://apps.apple.com/fr/app/my-lovely-planet/id1573748823";
    } else if (/android/i.test(userAgent)) {
        // Redirection vers le Play Store pour les appareils Android
        window.location.href = "https://play.google.com/store/apps/details?id=com.ImagineComp.ImagineSerie&hl=fr&gl=US";
    }
}
