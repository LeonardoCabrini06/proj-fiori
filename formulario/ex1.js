sap.ui.getCore().attachInit(()=>{

    const title = new sap.m.Title({
        text: 'Cadastro de Usuário'
    })

    const nome = new sap.m.Input({
        placeholder: 'Digite seu nome',
        type: 'Text'
    })

    const idade = new sap.m.Input({
        placeholder:'Digite sua idade',
        type: sap.m.InputType.Number
    })

    const btn_cad = new sap.m.Button({
        text: 'Cadastrar',
        type: sap.m.ButtonType.Accept,
        icon: 'sap-icon://add-employee',
        width: '225px',
        press: () => {
            const v_nome = nome.getValue()
            const v_idade = idade.getValue()

            if (v_nome === "") {
                sap.m.MessageToast.show("Digite um nome válido")
                return
            }

            const newText = new sap.m.Text({
                text: `Usuário ${v_nome} possui ${v_idade} anos`
            })

            vBox.addItem(newText)

            nome.setValue("")
            idade.setValue("")
        }
    })

    const vBox = new sap.m.VBox({
        items: [
            title,
            nome,
            idade,
            btn_cad
        ],
        width: '30%',
        rowGap: '15px'
    })

    vBox.placeAt("conteudo")

})