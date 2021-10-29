function Withdraw(){
 
  const [show, setShow]         = React.useState(true);
  const [amount, setAmount]         = React.useState(0);
  const [newBalance, setnewBalance]         = React.useState(0);
  const [isWithdrawDisabled, setisWithdrawDisabled]         = React.useState(true);


  const ctx = React.useContext(UserContext);  

  function handleDeposit(){
    let newTotal= Number(ctx.users[0].balance)-Number(amount);
    console.log(newTotal);
    if(isNaN(newTotal))
    {
      alert(`${amount} is not a valid Number. Please! enter valid number`);
      return;
    }
    if(newTotal<0)
    {
      alert("Withdraw cannot exced the account balance");
      return;
    }
    else if(Number(amount)<=0 )
    {
      alert(`${amount} is not valid entry. Please enter positive number`);
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
          <input type="input" className="form-control" id="withdraw" placeholder="Enter amount" value={amount} onChange={e => {setAmount(e.currentTarget.value); if(e.currentTarget.value>0)setisWithdrawDisabled(false); else setisWithdrawDisabled(true)}}/><br/>
          <button type="submit" className="btn btn-light" onClick={handleDeposit} disabled={isWithdrawDisabled} >Withdraw</button>
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
