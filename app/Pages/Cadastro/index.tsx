import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, TextInput, Modal, Image, ScrollView} from "react-native";
import styles from '../../styles/styleIndex';
import { useNavigation } from "@react-navigation/native";
import { MaskedTextInput } from "react-native-mask-text";
import {banco} from '../../../Firebase/FirebaseConection'
import {auth} from '../../../Firebase/FirebaseConection'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {doc, getDoc, onSnapshot, setDoc, collection, addDoc} from 'firebase/firestore'




export default function Cadastro() {
  const [modalVisivel, setModalVisivel] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [contato, setContato] = useState("");
  const [senha, setSenha] = useState("");
  const [rsenha, setRsenha] = useState("");

  const [erroNome, setErroNome] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroEmpresa, setErroEmpresa] = useState('');
  const [erroContato, setErroContato] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [erroRsenha, setErroRsenha] = useState('');

  const [selecionado, setSelecionado] = useState(false)
  const [modalTermos, setModalTermo] = useState(false)

  const navegacao = useNavigation();

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!re.test(String(email).toLowerCase())){
    setErroEmail("Preencha seu e-mail corretamente")
    
  }



  useEffect(()=>{
    async function getDados(){

    }
    getDados()
  }, [])
  

  const validar = () => {
    let error = false;
    

    setErroNome('');
    setErroEmail('');
    setErroEmpresa('');
    setErroContato('');
    setErroSenha('');
    setErroRsenha('');

    if (nome.trim() === "") {
      setErroNome("Preencha seu nome");
      error = true;
    }

    if (email.trim() === "") {
      setErroEmail("Preencha seu e-mail corretamente");
      error = true;
    }

    if (empresa.trim() === "") {
      setErroEmpresa("Preencha sua empresa corretamente");
      error = true;
    }

    if (contato.trim() === "") {
      setErroContato("Preencha um número de contato válido");
      error = true;
    }

    if (senha.length < 6){
      setErroSenha("A senha deve conter no mínimo 06 caracteres");
      error = true  
    }
    if (rsenha.length < 6){
      setErroRsenha("A senha deve conter no mínimo 06 caracteres");
      error = true  
    }

    if (senha !== rsenha) {
      setErroSenha("As senhas não coincidem!");
      setErroRsenha("As senhas não coincidem!");
      error = true;
    } 


    return !error;
  };


  function limpaDados() {
    setNome("");
    setEmail("");
    setEmpresa("");
    setContato("");
    setSenha("");
    setRsenha("");
  }

  function fecharModal() {
    setModalVisivel(false);
    limpaDados();
    navegacao.navigate("Login");
  }


  async function cadastrar (){
    if (!validar()){
      return
    }
    try{
      const usuario = await createUserWithEmailAndPassword(auth, email, senha)
      console.log(usuario)

      console.log("Sucesso")
      await bancodeDados()
      setModalVisivel(true);  

    } catch (error){
      console.error('Erro ao Cadastrar Usuário')
    }

  }

  async function bancodeDados (){
    await addDoc(collection(banco, "Clientes"),{
      nome: nome,
      email: email,
      empresa: empresa,
      contato: contato,
    })
  }






  return (
    <View style={styles.cadastroContainer}>
      <Text style={styles.txtcadastro}>Cadastre-se</Text>

      <ScrollView>
        <View style={styles.containerInputs}>
          <TextInput
            style={styles.textInputs}
            placeholder="Nome:"
            value={nome}
            onChangeText={(texto) => setNome(texto)}
          />
          {erroNome && <Text style={{ color: "red", backgroundColor:'white', borderRadius: 5, marginTop: 5, padding: 5}}>{erroNome}</Text>}
        </View>

        <View style={styles.containerInputs}>
          <TextInput
            style={styles.textInputs}
            placeholder="Email:"
            value={email}
            onChangeText={(texto) => setEmail(texto)}
          />
          {erroEmail && <Text style={{  color: "red", backgroundColor:'white', borderRadius: 5, marginTop: 5, padding: 5 }}>{erroEmail}</Text>}
        </View>

        <View style={styles.containerInputs}>
          <TextInput
            style={styles.textInputs}
            placeholder="Empresa:"
            value={empresa}
            onChangeText={(texto) => setEmpresa(texto)}
          />
          {erroEmpresa && <Text style={{  color: "red", backgroundColor:'white', borderRadius: 5, marginTop: 5, padding: 5 }}>{erroEmpresa}</Text>}
        </View>

        <View style={styles.containerInputs}>

          <MaskedTextInput
            style={styles.textInputs}
            placeholder="Contato:"
            keyboardType='phone-pad'
            mask="(99) 99999-9999"
            value={contato}
            onChangeText={(texto) => setContato(texto)}
          />

          {erroContato && <Text style={{  color: "red", backgroundColor:'white', borderRadius: 5, marginTop: 5, padding: 5 }}>{erroContato}</Text>}
        </View>

        <View style={styles.containerInputs}>
          <TextInput
            style={styles.textInputs}
            placeholder="Senha:"
            secureTextEntry
            value={senha}
            onChangeText={(texto) => setSenha(texto)}
          />
          {erroSenha && <Text style={{  color: "red", backgroundColor:'white', borderRadius: 5, marginTop: 5, padding: 5 }}>{erroSenha}</Text>}
        </View>

        <View style={styles.containerInputs}>
          <TextInput
            style={styles.textInputs}
            placeholder="Repetir Senha:"
            value={rsenha}
            onChangeText={(texto) => setRsenha(texto)}
            secureTextEntry
          />
          {erroRsenha && <Text style={{  color: "red", backgroundColor:'white', borderRadius: 5, marginTop: 5, padding: 5 }}>{erroRsenha}</Text>}
        </View>

        <View>
          <TouchableOpacity
          onPress={()=> setModalTermo(true)}
          style={styles.btndosTermos}
          >
            <Text style={styles.txtTermos}>Ler os termos de uso</Text>
          </TouchableOpacity>

          <Modal
          visible={modalTermos}
          animationType="slide"
          transparent={false}
          onRequestClose={()=>setModalTermo(false)}
          >
            <View style={styles.areaTermo}>
              <Text style={styles.tituloTermo}>Termos de Uso do Aplicativo</Text>
              <ScrollView>

                <Text style={styles.textoTermoArea}> 1.	Introdução: {'\n'} {'\n'}

                            Bem-vindo ao Portifólio Geomak, onde você verá quem são os nossos fornecedores, produtos, contato e redes sociais. Estes termos de uso regem o uso do nosso aplicativo. Ao utilizar nosso aplicativo, você concorda com estes termos. Se você não concorda com algum destes termos, não utilize nosso aplicativo. {'\n'}
                </Text>

                <Text style={styles.textoTermoArea}> 2.	Dados Coletados: {'\n'}{'\n'}

                            Nós coletamos os seguintes dados pessoais: {'\n'}
                            {'\n'}
                            •	Nome; {'\n'}
                            •	E-mail; {'\n'} 
                            •	Nome da Empresa em que trabalha {'\n'}
                            •	Telefone de contato{'\n'}
                </Text>

                <Text style={styles.textoTermoArea}> 3.	Finalidade da Coleta: {'\n'}{'\n'}

                            OS dados coletados serão utilizados para as seguintes finalidades:{'\n'}{'\n'}

                            •	Cadastro do usuário{'\n'}
                            •	Envio de notificações e comunicados {'\n'}
                            •	Melhoria do nosso serviço
                            •	Atualizações sobre nossa empresa, como promoções, serviços, produtos etc.{'\n'}
                </Text>

                <Text style={styles.textoTermoArea}> 4.	Métodos de Coleta{'\n'}{'\n'}

                            Os dados coletados pessoais são coletados por meio de:{'\n'}{'\n'}

                            •	Formulário de cadastro preenchido pelo usuário{'\n'}
                </Text>

                <Text style={styles.textoTermoArea}> 5.	Armazenamento e Segurança:{'\n'}{'\n'}

                            Os dados pessoais são armazenados de forma segura em nossos servidores em nuvem. Utilizamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acessos não autorizados, perda ou alteração.{'\n'}
                </Text>

                <Text style={styles.textoTermoArea}> 6.	Compartilhamento de Dados:{'\n'}{'\n'}

                            Os dados pessoais podem ser compartilhados com:{'\n'}{'\n'}

                            •	Autoridades legais, quando requerido por lei.{'\n'}

                </Text>

                <Text style={styles.textoTermoArea}> 7.	Direitos do Usuário:{'\n'}{'\n'}

                            Você tem os seguintes direitos em relação aos seus dados pessoais:{'\n'}{'\n'}

                            •	Acesso: Solicitar acesso aos dados que temos sobre você{'\n'}
                            •	Correção: Solicitar a correção de dados incorretos ou incompletos{'\n'}
                            •	Exclusão: Solicitar a exclusão dos seus dados pessoais {'\n'}
                            •	Portabilidade: Solicitar a transferência de seus dados para outros serviços {'\n'}

                </Text>

                <Text style={styles.textoTermoArea}> 8.	Consentimento:{'\n'}{'\n'}

                            Ao utilizar nosso aplicativo, você concorda com a coleta e uso de seus dados pessoais conforme descrito nestes Termos de Uso. Você pode retirar seu consentimento a qualquer momento, entrando em contato conosco.{'\n'}

                </Text>

                <Text style={styles.textoTermoArea}> 9.	Atualizações:{'\n'}{'\n'}

                            Podemos atualizar estes Termos de Uso periodicamente. As alterações serão publicadas em nosso aplicativo. Recomendamos que você revise estes termos regularmente.
                </Text>
                    <TouchableOpacity
                    onPress={()=>setModalTermo(false)}
                    style={styles.btnfecharTermo}
                    >
                      <Text style={styles.txttermo}>Fechar</Text>
                    </TouchableOpacity>

                <View style={{marginTop:60}}></View>
                </ScrollView>
            </View>
          </Modal>

        </View>



        <TouchableOpacity style={styles.btncadastrar} onPress={cadastrar}>
          <View>
            <Text style={styles.txtcadastrar}>Cadastrar</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.modal}>
          <View style={styles.viewmodal}>
            <Text style={styles.txtmodal01}>Cadastrado com Sucesso!</Text>
            <Image
              style={styles.imgmodal}
              source={require("../../../assets/images/check.png")}
            />
            <TouchableOpacity onPress={fecharModal} style={styles.btnmodal}>
              <Text style={styles.txtmodal02}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={{ marginBottom: 2 , marginTop:5}} />
    </View>
  );
}
