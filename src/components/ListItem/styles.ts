import styled from "styled-components";

type ContainerProps = {
    done: boolean;

}

export const Container = styled.div(({ done } : ContainerProps)=>(

    `
    display: flex;
    background-color: #20141C;
    padding: 11px;
    border-radius: 9px;
    margin-bottom: 12px;
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

