import "./login.css"



export default function Login() {
    return (
        <>
            <main className="mainLogin">
                <div className="formularioLogin">
                    <h2>Acesse sua conta</h2>
                    <p>Novo cliente? Então registre-se <a className="registreAqui" href="#Aqui">aqui.</a></p>

                    <form className="formLogin">
                        <label htmlFor="login">Login</label>
                        <input className="inputLogin"
                            type="text"
                            id="login"
                            name="login"
                            placeholder="Insira seu login ou email"
                        />

                        <label  htmlFor="senha">Senha</label>
                        <input className="inputLogin"
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Insira sua senha"
                        />
                        <a className="esqueciSenha" href="#Esqueci a senha">Esqueci minha senha</a>
                        <button type="submit">Acessar conta</button>

                        <div className="facebookLogin">
                            <p>Ou faça o login com</p>
                            <img className="imgRedesSociais"
                                src="src/assets/img/redes.png"
                                alt="Login com Facebook"
                                width="55"
                            />
                        </div>
                    </form>
                </div>

                <div className="imagensLogin">
                    <img
                        src="src/assets/img/pexels-melvin-buezo-2529148 1.png"
                        alt="Homem usando moletom e boné"
                    />
                    <img
                        src="src/assets/img/pexels-melvin-buezo-2529148 2.png"
                        alt="Homem com moletom olhando para o lado"
                    />
                </div>
            </main >
        </>
    );
}
