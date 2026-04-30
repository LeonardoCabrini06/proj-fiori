sap.ui.getCore().attachInit(()=>{
    const model = new sap.ui.model.json.JSONModel({
        calc: {
            valor: ""
        }
    })

    const addVlr = (vlr) => {
        const atual = model.getProperty("/calc/valor")
        model.setProperty("/calc/valor", atual + vlr)
    }

    const display = new sap.m.Input({
        value: "{dados>/calc/valor}",
        editable: false
    })

    const btn1 = new sap.m.Button({
        text:"1",
        press: () => {
            addVlr("1")
        }
    })

    const btn2 = new sap.m.Button({
        text:"2",
        press: () => {
            addVlr("2")
        }
    })

    const btn3 = new sap.m.Button({
        text:"3",
        press: () => {
            addVlr("3")
        }
    })

    const btn4 = new sap.m.Button({
        text:"4",
        press: () => {
            addVlr("4")
        }
    })

    const btn5 = new sap.m.Button({
        text:"5",
        press: () => {
            addVlr("5")
        }
    })

    const btn6 = new sap.m.Button({
        text:"6",
        press: () => {
            addVlr("6")
        }
    })

    const btn7 = new sap.m.Button({
        text: "7",
        press: () => {
            addVlr("7")
        }
    })

    const btn8 = new sap.m.Button({
        text: "8",
        press: () => {
            addVlr("8")
        }
    })

    const btn9 = new sap.m.Button({
        text: "9",
        press: () => {
           addVlr("9")
        }
    })

    const btn0 = new sap.m.Button({
        text: "0",
        press: () => {
            addVlr("0")
        }
    })

    const cancel = new sap.m.Button({
        text: "C",
        press: () => {
            const atual = model.getProperty("/calc/valor")
            model.setProperty("/calc/valor", "")
        }
    })

    const btnSoma = new sap.m.Button({
        text: "+",
        press: () => {
            addVlr("+")
        }
    })

    const btnIgual = new sap.m.Button({
        text: "=",
        press: () => {
            const conta = model.getProperty("/calc/valor")
            const resultado = eval(conta)

            if (!isFinite(resultado)) {
                sap.m.MessageToast.show("Não é possível dividir por zero")
                 model.setProperty("/calc/valor", "")
                return
            }

            model.setProperty("/calc/valor", resultado)
        }

    })

    const btnSub = new sap.m.Button({
        text: "-",
        press: () => {
            addVlr("-")
        }
    })

    const btnMult = new sap.m.Button({
        text: "x",
        press: () => {
            addVlr("*")
        }
    })

    const btnDiv = new sap.m.Button({
        text: "/",
        press: () => {
            addVlr("/")
        }
    })

    const hbox1 = new sap.m.HBox({
        items: [
            btn1,
            btn2,
            btn3,
            btnSoma
        ],
        gap: "40px"
    })

    const hbox2 = new sap.m.HBox({
        items: [
            btn4,
            btn5,
            btn6,
            btnSub
        ],
        gap: "40px"
    })

    const hbox3 = new sap.m.HBox({
        items: [
            btn7,
            btn8,
            btn9,
            btnMult
        ],
        gap: "40px"
    })

    const hbox4 = new sap.m.HBox({
        items: [
            btn0,
            cancel,
            btnIgual,
            btnDiv
        ],
        gap: "40px"
    })

    const vbox = new sap.m.VBox({
        items: [
            display,
            hbox1,
            hbox2,
            hbox3,
            hbox4
        ],
        width: "50%",
        gap: "10px"
    }).setModel(model, "dados")

    const pag1 = new sap.m.Page({
        title: "Pagina Inicial",
        id: "pagina1",
        content: [
            new sap.m.Button({
                text: "Ir para calcladora",
                press: () => {
                    app.to("pagina2")
                }
            })
        ]
    })

    const pag2 = new sap.m.Page({
        id:"pagina2",
        title:"Calculadora",

        content: [
            new sap.m.Text({
                text: "Minha calculadora"
            }),
            vbox,
            new sap.m.Button({
                text:"Voltar",
                press:()=>{
                    model.setProperty("/calc/valor", "")
                    app.to("pagina1")
                }
            })
        ]
    })

    const app = new sap.m.App({
        pages: [
            pag1,
            pag2
        ]

    })

    app.placeAt("conteudo")
})