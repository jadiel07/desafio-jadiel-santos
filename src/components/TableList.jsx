import React, { useState } from "react";

export default function TableList() {
  const [finalValue, setFinalValue] = useState(0);
  const [paymentOption, setPaymentOption] = useState("dinheiro");
  const [coffeeAdded, setCoffeeAdded] = useState(false);
  const [sandwichAdded, setSandwichAdded] = useState(false);

  const coffe = 3.0;
  const chantily = 1.5;
  const juice = 6.2;
  const sanduiche = 6.5;
  const queijo = 2.0;
  const salgado = 7.25;
  const combo1 = 9.5;
  const combo2 = 7.25;

  const calcularPorcentagem = (valor, percentual) => {
    return (percentual / 100) * valor;
  };

  const handleClick = (value) => {
    // Verificar se o café ou sanduíche foi adicionado antes do chantilly ou queijo
    if (
      (value === chantily && !coffeeAdded) ||
      (value === queijo && !sandwichAdded)
    ) {
      return alert("item extra somente disponivel com o principal");
    }

    setFinalValue(finalValue + value);

    // Marcar café como adicionado
    if (value === coffe) {
      setCoffeeAdded(true);
    }

    // Marcar sanduíche como adicionado
    if (value === sanduiche) {
      setSandwichAdded(true);
    }
  };

  const handlePayment = () => {
    let totalValue = finalValue;

    // Funções para aplicar desconto ou aumentar o preço
    if (paymentOption === "debito") {
      totalValue = totalValue - calcularPorcentagem(totalValue, 5);
    }
    if (paymentOption === "crédito") {
      totalValue = totalValue + calcularPorcentagem(totalValue, 3);
    }

    return totalValue;
  };

  const remove = () => {
    setFinalValue(0);
    setCoffeeAdded(false);
    setSandwichAdded(false);
  };

  return (
    <>
      <h1>Lanchonete DB</h1>
      <table>
        <thead>
          <tr>
            <th>Catalogos</th>
            <th>Preço</th>
            <th>Adicionar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Café</td>
            <td>R$ 3,00</td>
            <td>
              <button onClick={() => handleClick(coffe)}>adicionar</button>
            </td>
          </tr>
          <tr>
            <td>Chantily</td>
            <td>R$ 1,50</td>
            <td>
              <button onClick={() => handleClick(chantily)}>adicionar</button>
            </td>
          </tr>
          <tr>
            <td>Suco</td>
            <td>R$ 6,50</td>
            <td>
              <button onClick={() => handleClick(juice)}>adicionar</button>
            </td>
          </tr>
          <tr>
            <td>Sanduiche</td>
            <td>R$6,50</td>
            <td>
              <button onClick={() => handleClick(sanduiche)}>adicionar</button>
            </td>
          </tr>
          <tr>
            <td>queijo (extra do sanduiche)</td>
            <td>R$ 2,00</td>
            <td>
              <button onClick={() => handleClick(queijo)}>adicionar</button>
            </td>
          </tr>
          <tr>
            <td>Salgado</td>
            <td>R$ 7,25</td>
            <td>
              <button onClick={() => handleClick(salgado)}>adicionar</button>
            </td>
          </tr>
          <tr>
            <td>Combo1</td>
            <td>R$ 9,50</td>
            <td>
              <button onClick={() => handleClick(combo1)}>adicionar</button>
            </td>
          </tr>
          <tr>
            <td>combo2</td>
            <td>R$ 7,50</td>
            <td>
              <button onClick={() => handleClick(combo2)}>adicionar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Forma de pagamento</h3>
      <div>
        <button onClick={() => setPaymentOption("dinheiro")}>Dinheiro</button>
        <button onClick={() => setPaymentOption("debito")}>Debito</button>
        <button onClick={() => setPaymentOption("crédito")}>Crédito</button>
      </div>
      <h1>R$ {handlePayment().toFixed(2)}</h1>
      <button onClick={() => remove()}>Outro pedido</button>
    </>
  );
}
