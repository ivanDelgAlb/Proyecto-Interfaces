import React, { useEffect, useState } from 'react';
import '../../assets/css/chatList.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ReactSession } from "react-client-session";
import NavBar from '../NavBar';


export default function ChatList(){

    const [anuncios, setAnuncios] = useState([]);

    let myId = ReactSession.get("id");

    const fetchData = async () => {
        try{
            const response = await axios.get('http://127.0.0.1:3001/getChats',{
                params: {
                    id: myId
                },
            });
            setAnuncios(response.data);
        } catch(error) {
            console.error(error);
        }
    };
    console.log(anuncios);

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <>

<       div id='chatNav'>
            <NavBar />
        </div>
        <div className="container-fluid full-screen">
        </div>
            <div class="wrapper-chats">
            
                <div class="right">
                <div class="right-container">
                    <div class="right-card">
                    <div class="right-card-container">
                    <div className="col-md-12"><h2><b>Mis Chats</b></h2>
                        <div class="right-card-header">
                        </div>
                        <div class="right-card-body">
                        <div class="right-card-body-container">
                            {anuncios.map((anuncio, key) => {
                                    console.log(anuncio.otroId)
                                    return(
                                <a href={"/chat/" + (anuncio.producto[0].vendedor === myId ? anuncio.otroId :myId) + "/" + anuncio.producto[0].id}>
                                <div class="card" key={key}>
                                <div class="perfil">
                                    <div class="perfil-info">
                                    <span class="job-font" tabIndex="0">Usuario: {anuncio.producto[0].username + " "}</span>
                                    <span class="name-font" tabIndex="0">Anuncio: {anuncio.producto[0].nombre + " " + anuncio.producto[0].precio + "€"} </span>
                                    </div>
                                </div>
                                </div>
                                </a>
                                    )
                                })
                              
                            }
                        </div>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}