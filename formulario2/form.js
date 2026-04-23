sap.ui.getCore().attachInit(()=>{

    const title = new sap.m.Title({
        text: 'Formulário'
    })

    const f_nome = new sap.m.Input({
        placeholder: 'Digite seu nome',
        type: 'Text'
    })

    const f_idade = new sap.m.Input({
        placeholder:'Digite sua idade (anos)',
        type: sap.m.InputType.Number
    })

    const f_altura = new sap.m.Input({
        placeholder: 'Digite sua altura (m)',
        type: sap.m.InputType.Number
    })

    const f_sexo = new sap.m.Select({
        items: [
            this.masc = new sap.ui.core.Item({
                key: 'M',
                text: 'Masculino'
            }),
            this.fem = new sap.ui.core.Item({
                key:'F',
                text:'Feminino'
            })
        ]
    })

    const btn_add = new sap.m.Button({
        type: 'Accept',
        text: 'Inserir Usuário',
        width: '100%',
        icon: 'sap-icon://add-employee',

        press:()=>{
            const v_nome = f_nome.getValue()
            const v_idade = f_idade.getValue()
            const v_altura = f_altura.getValue()
            const temp = f_sexo.getSelectedItem()
            const v_sexo = temp.getText()

            if (v_nome === "" || v_idade === "" || v_altura === "") {

                sap.m.MessageToast.show("Preencha todos os campos!")

                return
            }

            const linhas = new sap.m.ColumnListItem({
                cells: [

                    new sap.m.Text({
                        text: v_nome
                    }),

                    new sap.m.Text({
                        text: v_idade
                    }),

                    new sap.m.Text({
                        text: v_altura
                    }),

                    new sap.m.Text({
                        text: v_sexo
                    })

                ]

            })

            table.addItem(linhas)

            f_nome.setValue("")
            f_idade.setValue("")
            f_altura.setValue("")

        }


    })

    const table = new sap.m.Table({

        columns: [

            this.col_nome = new sap.m.Column({
                header: new sap.m.Text({
                    text:'Nome'
                })
            }),

            this.col_idade = new sap.m.Column({
                header: new sap.m.Text({
                    text:'Idade'
                })
            }),

            this.col_altura = new sap.m.Column({
                header: new sap.m.Text({
                    text:'Altura'
                })
            }),

            this.col_sexo = new sap.m.Column({
                header: new sap.m.Text({
                    text:'Sexo'
                })
            })

        ]

    })

    const vBox = new sap.m.VBox({
        items: [
            title,
            f_nome,
            f_idade,
            f_altura,
            f_sexo,
            btn_add,
            table
        ],
        width: '30%',
        rowGap: '10px'
    })
    
    vBox.placeAt('conteudo')
})