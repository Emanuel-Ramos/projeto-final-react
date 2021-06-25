import { useState } from "react"

const EditarCliente = (props) => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [cpf, setCpf] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [userNameCliente, setUserNameCliente] = useState('')
    const [senhaConfirma, setSenhaConfirma] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [complemento, setComplemento] = useState('')
    const salvar = () => {
        // const alteracao = {
        //     nome: nome,
        //     usuario: userNameCliente,
        //     telefone: telefone,
        //     email: email,
        //     dataNascimento: dataNascimento,
        //     senha: senhaConfirma,
        //     cpf: cpf,
        //     endereco: {
        //         cep: cep,
        //         rua: rua,
        //         numero: numero,
        //         bairro: bairro,
        //         cidade: cidade,
        //         uf: uf,
        //         complemento: complemento
        //     }
        // }
        // props.salvarAlteracoes(alteracao)
    }

    if (props.edit) {
        return (
            <div>
                {/* <form onSubmit={salvar}>
                    <input defaultValue={props.data.nome} onChange={(e) => setNome(e.target.value)} />
                    <button type="submit">Salvar</button>
                </form> */}
            </div>
        )
    } else {
        return (
            <div>
                {/* <a>{props.data}</a> */}
            </div>
        )
    }
}

export default EditarCliente