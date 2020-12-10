class Form {
    constructor(){
        this.input = createInput('first element')
        this.button = createButton('submit')
    }

    display(){
        this.input.position(400,200)

        this.button.position(400,400)
        this.button.mousePressed(()=>{

            this.input.hide()
            this.button.hide()

            fruit = this.input.value()
            //console.log(firstElement)
            
        })

    }
}