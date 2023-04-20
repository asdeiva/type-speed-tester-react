import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body{
    background : ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    margin : 0;
    padding : 0;
    box-sizing: border-box;
    transition : all 0.25 linear;
}
.canvas{
    display : grid;
    min-height : 100vh;
    grid-auto-flow : row;
    grid-template-row: auto 1fr auto;
    gap: 0.5rem;
    padding : 2rem;
    // width: 100vw;
    align-items: center;
    text-align: center;  
}

.type-box{
    display: block;
    width:1000px;
    margin-left:auto;
    margin-right : auto;
    overflow:hidden;
}
.words{
    font-size : 32px;
    display:flex;
    flex-wrap:wrap;
    color:${({ theme }) => theme.typeBoxText};
}
.word {
    margin:5px;
    padding-right:2px;
}
.hidden-input{
    opacity:0;
    pointer: none;
}
.current{
    border-left: 1px solid;
    animation: blinking 2s infinite;
    animation-timing-function: ease;

    @keyframes blinking{
        0%{border-left-color:${({ theme }) => theme.textColor};}
        25%{border-left-color:${({ theme }) => theme.background};}
        50%{border-left-color:${({ theme }) => theme.textColor};}
        75%{border-left-color:${({ theme }) => theme.background};}
        100%{border-left-color:${({ theme }) => theme.textColor};}
    }
}

.current-right{
    border-right: 1px solid;
    animation: blinking-right 2s infinite;
    animation-timing-function: ease;

    @keyframes blinking-right{
        0%{border-right-color:${({ theme }) => theme.textColor};}
        25%{border-right-color:${({ theme }) => theme.background};}
        50%{border-right-color:${({ theme }) => theme.textColor};}
        75%{border-right-color:${({ theme }) => theme.background};}
        100%{border-right-color:${({ theme }) => theme.textColor};}
    }
}
.header{
    display : flex;
    width:1000px;
    margin-left: auto;
    margin-right: auto;
    justify-content : space-between;
    padding :0.5 rem;
}
.logo{
    display:flex;
    cursor:pointer;
    align-items:center;
}
.project-title{
    display:flex;
    font-size: 1.5rem;
    text-transform: uppercase;
    align-items:center;
}
.correct{
    color : ${({ theme }) => theme.textColor};
}
.incorrect{
    color: red;
}

.upper-menu{
    display: flex;
    width : 1000px;
    margin-left: auto;
    margin-right: auto;
    font-size:1.15rem;
    justify-content : space-between;
    padding :0.5 rem;
}
.modes{
    display: flex;
    gap : 0.4rem;
}

.time-mode:hover{
    color:green;
    cursor: pointer;
}

.footer{
    display: flex;
    width : 1000px;
    margin-left: auto;
    margin-right: auto;
    justify-content : space-between;
    align-items: center;
    text-align: center;
}
.footer-left{
    display: flex;
    align-items:center;
}
.stats-box{
    display:flex;
    width:1000px;
    height:auto;
    margin-left:auto;
    margin-right:auto;
}
.left-stats{
    width:30%;
    padding : 30px;
}
.right-stats{
    width:70%;
}
.title{
    font-size:20px;
    color:${({ theme }) => theme.typeBoxText};
}
.subtitle{
    font-size:30px;
}
.user-profile{
    width: 1000px;
    margin : auto;
    display:flex;
    height: 15rem;
    background : ${({ theme }) => theme.typeBoxText};
    border-radius: 20px;
    padding:1rem;
    justify-content: center;
    align-text:center;
}

.user{
    width:50%;
    display:flex;
    margin-top:30px;
    margin-bottom:30px;
    font-size:1.5rem;
    padding:1rem;
    border-right : 2px solid;
}
.info{
    width:60%;
    padding:1rem;
    margin-top:1rem;
}
.picture{
    width:40%;
}

.total-tests{
    width:50%;
    display:flex;
    font-size: 3rem;
    align-items:center;
    justify-content:center;
}
.table, .graph-user-page{
    margin:auto;
    width:1000px;
}
.center-of-screen{
    display:flex;
    min-height:100vh;
    justify-content:center;
    align-items:center;
}

@media screen and (max-width: 600px) {
    .type-box {
      width:430px;
    }
    .footer{
        width:430px;
    }
    .header{
        width:430px;
    }
    .upper-menu{
        width:430px;
    }
    .user-profile{
        width:400px;
    }
    .table, .graph-user-page{
        width:430px;
    }
    .stats-box{
        width:400px;
    }
    .picture{
        display:none;
    }
    .total-tests{
        font-size: 2rem;
    }

`;
