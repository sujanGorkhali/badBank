function Withdraw(){
 
  const [show, setShow]         = React.useState(true);
  const [amount, setAmount]         = React.useState(0);
  const [newBalance, setnewBalance]         = React.useState(0);

  const ctx = React.useContext(UserContext);  

  function handleDeposit(){
    let newTotal= Number(ctx.users[0].balance)-Number(amount);
    console.log(newTotal);
    if(newTotal<0)
    {
      alert("Withdraw cannot exceed the account balance");
      return;
    }
    if(isNaN(newTotal))
    {
      alert(`${amount} is not a valid Number. Please! enter valid number`);
      return;
    }
    setnewBalance(newTotal);
    
   
    let user= ctx.users[0];
    user.balance=newTotal;
    ctx.users.push(user);
    console.log( user);
    setShow(false);
  }    

  function clearForm(){
    setAmount(0);
    setShow(true);
  }

 return (<Card
  bgcolor="primary"
  header="Withdraw"
  status={status}
  body={ show ? ( 
          <>
          BALANCE   
          <span   id="balance"  style={{paddingLeft: "150px"}}>{ctx.users[0].balance} </span><br/>
          Withdraw Amount<br/>
          <input type="input" className="form-control" id="deposit" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
          <button type="submit" className="btn btn-light" onClick={handleDeposit} >Withdraw</button>
          </>
  ):(
    <>
    <h5>Withdraw sucessful.</h5> 
    <h5>New Balance: {newBalance}</h5>
     <button  type="submit" className="btn btn-light" onClick={clearForm} > Withdraw another amount
    </button>
    </>
             )}
             />
           )
         }
