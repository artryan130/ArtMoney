import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    margin-top: -7rem;

    div{
        background: var(--shape);
        width: 22rem;
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;

        color: var(--text-title);
        
        header{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
    
        &.backgroundHigh{
            background: var(--green);
            color: #fff;
        }
    
    }

`;