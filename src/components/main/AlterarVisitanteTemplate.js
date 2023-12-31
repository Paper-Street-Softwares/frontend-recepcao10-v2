import React from "react";
import anime from "animejs";
import SearchFilterUpdate from "../../functions/SearchFilterUpdate";
import "../../css/main/alterarvisitante.css";
import "../../css/structure/input.css";
import style from "../../css/main/home.css";

const AlterarVisitanteTemplate = ({
  visitor,
  baseUrl,
  handleDeleteUser,
  handleUpdateUser,
  habilitarInput,
  handleClick,
  dialogAtiva,
  showDeleteModal,
}) => {
  return (
    <div className="main-AlterarVisitante">
      <dialog id="removervisitor" style={{ zIndex: "300000" }}>
        <div>
          <p>Deseja realmente APAGAR este visitante?</p>
          <button className="buttonBack-Global" onClick={handleDeleteUser}>
            QUERO APAGAR
          </button>
        </div>
      </dialog>

      <div className="title-AlterarVisitante">
        <p className="titles-Global">Alterar dados do visitante</p>
        <p className="text-Home">
          Passo 1. Toque no usuário após pesquisar pelo nome.
        </p>
        <p className="text-Home">
          Passo 2. Toque em "Editar dados" e depois, toque em "Atualizar".
        </p>
        <p className="titles-Global" id="vt1">
          Visitante: {visitor.name}
        </p>
      </div>
      <div id="formUpdate" className="form-AlterarVisitante">
        <form id="att">
          <div id="quadro">
            <SearchFilterUpdate onUserClick={handleClick} />
          </div>
        </form>
        <div
          id="quadro2"
          style={{ display: "none" }}
          className={`quadro2 ${dialogAtiva ? "active" : ""}`}
        >
          <p id="vt2" className="texts-Global">
            Preencha todos ou apenas o campo que queira alterar.
          </p>
          <div id="infos" className="painelUpdate-AlterarVisitante">
            <input
              className="inputs-Global"
              id="nomeUpdate"
              maxLength={53}
              type="text"
              disabled
              defaultValue={visitor.name}
              placeholder="Nome"
            />
            <input
              className="inputs-Global"
              id="telefoneUpdate"
              maxLength={53}
              type="text"
              disabled
              defaultValue={visitor.phone}
              placeholder="Telefone"
            />
            <select
              className="inputs-Global"
              id="generoUpdate"
              defaultValue=""
              style={{ pointerEvents: "none", opacity: "50%" }}
            >
              <option value="" disabled>
                Gênero
              </option>
              <option>Masculino</option>
              <option>Feminino</option>
            </select>
            <input
              className="inputs-Global"
              id="idadeUpdate"
              maxLength={53}
              type="text"
              disabled
              defaultValue={visitor.age}
              placeholder="Idade"
            />
            <input
              className="inputs-Global"
              id="enderecoUpdate"
              maxLength={53}
              type="text"
              disabled
              defaultValue={visitor.address}
              placeholder="Endereço"
            />
            <input
              className="inputs-Global"
              id="cidadeUpdate"
              maxLength={53}
              type="text"
              disabled
              defaultValue={visitor.cityAndState}
              placeholder="Cidade e Estado"
            />
            <input
              className="inputs-Global"
              id="religiaoUpdate"
              maxLength={53}
              type="text"
              disabled
              defaultValue={visitor.religion}
              placeholder="Religião"
            />
            <input
              className="inputs-Global"
              id="grupoUpdate"
              maxLength={53}
              type="text"
              disabled
              defaultValue={visitor.smallGroup}
              placeholder="Pequeno Grupo"
            />
            <input
              className="inputs-Global"
              id="estudoUpdate"
              maxLength={53}
              type="text"
              disabled
              defaultValue={visitor.bibleStudy}
              placeholder="Estudo Bíblico"
            />
          </div>
          <div id="botoes" className="buttonGroup-AlterarVisitante">
            <button
              className="buttonAtt-Global"
              id="edit"
              style={{ pointerEvents: "none", opacity: "100%" }}
              onClick={(event) => habilitarInput(event)}
            >
              EDITAR DADOS
            </button>
            <button
              className="buttonBack-Global"
              id="del"
              style={{ pointerEvents: "none", opacity: "20%" }}
              onClick={handleDeleteUser}
            >
              APAGAR VISITANTE
            </button>
            <button
              className="button-Global"
              id="upuser"
              style={{ pointerEvents: "none", opacity: "20%" }}
              onClick={handleUpdateUser}
            >
              ATUALIZAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlterarVisitanteTemplate;
