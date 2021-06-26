
const DadosCliente = (props) => {

    return (
        <div>
            <a>Bem vindo ao seu perfil {props.data.nome}</a>
            <h1>
                Dados de cadastro
            </h1>
            <div>
                <h3>Nome</h3>
                <a>{props.data.nome}</a>
                <h3>Usuario</h3>
                <a>{props.data.usuario}</a>
                <h3>Telefone</h3>
                <a>{props.data.telefone}</a>
                <h3>Email</h3>
                <a>{props.data.email}</a>
                <h3>cpf</h3>
                <a>{props.data.cpf}</a>
                <h3>cep</h3>
                <a>{props.data.endereco.cep}</a>
                <h3>rua</h3>
                <a>{props.data.endereco.rua}</a>
                <h3>numero</h3>
                <a>{props.data.endereco.numero}</a>
                <h3>bairro</h3>
                <a>{props.data.endereco.bairro}</a>
                <h3>cidade</h3>
                <a>{props.data.endereco.cidade}</a>
                <h3>uf</h3>
                <a>{props.data.endereco.uf}</a>
                <h3>complemento</h3>
                <a>{props.data.endereco.complemento}</a>

            </div>
        </div>
    )
}


export default DadosCliente