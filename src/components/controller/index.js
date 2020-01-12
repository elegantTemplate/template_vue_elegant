class Alert{
    /**
     * @param {string} title 
     * @param {string} content 
     * @param {() => {}} close 
     * @param {() => {}} btn 
     */
    show(title, content, close, btn) {}
    hide(){}   
}
class Loading {
    show() {}
    hide() {}
}
const alert = new Alert()
const loading = new Loading()
export { alert, loading }