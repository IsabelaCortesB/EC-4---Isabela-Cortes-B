"use strict";
function checkIdeas(arra) {
    if (arra.includes('Buena') == true) {
        return ('Publicar, fantastico');
    }
    else {
        return ('Fallo');
    }
}
module.exports = checkIdeas;
