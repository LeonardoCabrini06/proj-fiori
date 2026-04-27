sap.ui.getCore().attachInit(()=>{

    const input = new sap.m.Input({
        type:'Text',
        placeholder: 'Escreva seu nome'
    })

    const botao = new sap.m.Button({
        text: 'Clica aqui',
        type: 'Back',
        icon: 'sap-icon://master-task-triangle-2',
        width: '100%',
        press: ()=>{
            const valor = input.getValue()
            sap.m.MessageToast.show(`O nome digitado foi ${valor}`)
            input.setValue("")
        }
    })

    const vBox = new sap.m.VBox({
        items: [
            input,
            botao
        ],
        width: '30%'
    })

    vBox.placeAt('conteudo')

})