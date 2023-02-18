import styled from "styled-components";

type ContainerProps = {
    done: boolean;

}

export const Container = styled.div(({ done } : ContainerProps)=>(

    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 11px;
    margin-bottom: 11px;
    align-items: center;
    
    label{
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
    input{
        width: 25px;
        height: 25px;
        margin-height: 5px;
    }
`

))

