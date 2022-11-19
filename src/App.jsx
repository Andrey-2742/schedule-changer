import { useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import FileUpload from './pages/FileUpload';
import Login from './pages/Login';
import './App.css';

function App() {
    
    const [isLogged, setLogged] = useState(localStorage.getItem("isLogged"));

    return (
        <BrowserRouter>
            {isLogged
            ?
            <Routes>
                <Route path="/" element={
                    <Main setLogged={setLogged}/>
                }/>
                <Route path="/upload/img" element={
                    <FileUpload quantity={3} accept=".png, .jpg, .jpeg"
                                title="Отправить замены"/>
                }/>
                <Route path="/upload/template" element={
                    <FileUpload quantity={1} accept=".docx, .doc"
                                title="Обновить шаблон"/>
                }/>
                <Route path="/upload/bell" element={
                    <FileUpload quantity={1} accept=".png, .jpg, .jpeg"
                                title="Обновить расписание звонков"/>
                }/>
                <Route path='/*' element={<Navigate to='/'/>}/>
            </Routes>
            :
            <Routes>
                <Route path="/login" element={<Login setLogged={setLogged}/>}/>
                <Route path='/*' element={<Navigate to='/login'/>}/>
            </Routes>
            }
        </BrowserRouter>
    );
}

export default App;
