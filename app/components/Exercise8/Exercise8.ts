function checkIdeas(arra:Array<string>) {

    if (arra.includes('Buena') == true) {
        return ('Publicar, fantastico');
    } else {
        return ('Fallo');
    }
}

module.exports = checkIdeas;