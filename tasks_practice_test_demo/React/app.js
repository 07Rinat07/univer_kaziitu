<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>METANIT.COM</title>
    <style>
        a { margin: 5px;}
        .active{ background-color:#486ca3; color: #fff; padding:6px;}
    </style>
</head>
<body>
    <div id="app"></div>
 
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
 
    <script type="text/babel" data-type="module">
        import React from "https://esm.sh/react@19?dev";
        import ReactDOM from "https://esm.sh/react-dom@19/client?dev";
        import { BrowserRouter, Routes, Route, Navigate, Link, useParams, useNavigate } from "https://esm.sh/react-router-dom@7?dev";
   
        function Home(){ return <h2>Главная</h2>; }
        function New(){
            const params = useParams();
            return <h2>New {params.id}</h2>;
        }
        function Old(){
            const {id} = useParams();
            const navigate = useNavigate();
            return <div>
                <h2>Old {id}</h2>
                <button
                onClick={async event => {
                    navigate(`/new/${id}`);
                }}
                >Navigate</button>
            </div>;
        }
         
        ReactDOM.createRoot(
            document.getElementById("app")
        )
        .render(
            <BrowserRouter>
                <div>
                    <nav>
                        <Link to="/">Home</Link> | 
                        <Link to="/old/123">Old</Link> |
                        <Link to="/new/456">New</Link>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/new/:id" element={<New/>} />
                        <Route path="/old/:id" element={<Old />} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    </script>
</body>
</html>