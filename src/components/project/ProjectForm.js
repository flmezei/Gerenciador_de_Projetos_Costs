import React from 'react';

function ProjectForm() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Insira o nome do projeto"/>
            </div>
            <div>
                <input type="text" placeholder="Insira o orçamento total"/>
            </div>
            <div>
                <select>
                    <option desabled>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar Projeto"/>
            </div>
        </form>
    );
}

export default ProjectForm;