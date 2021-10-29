function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [amount, setAmount]         = React.useState(0);
  const [newBalance, setnewBalance]         = React.useState(0);

  const ctx = React.useContext(UserContext);  

  function handleDeposit(){
    let newTotal= Number(amount)+ Number(ctx.users[0].balance);
    setnewBalance(newTotal);
    console.log(amount,ctx.users[0], (Number(amount)+ Number(ctx.users[0].balance)));
   
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
  header="Deposit"
  status={status}
  body={ show ? ( 
          <>
          BALANCE   
          <span   id="balance"  style={{paddingLeft: "150px"}}>{ctx.users[0].balance} </span><br/>
          DEPOSIT AMOUNT<br/>
          <input type="input" className="form-control" id="deposit" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
          <button type="submit" className="btn btn-light" onClick={handleDeposit} >Deposit</button>
          </>
  ):(
    <>
    <h5>Deposit sucessful.</h5> 
    <h5>New Balance: {newBalance}</h5>
     <button  type="submit" className="btn btn-light" onClick={clearForm} > Make another deposit
    </button>
    </>
             )}
             />
           )
         }
