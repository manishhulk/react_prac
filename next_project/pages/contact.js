import {useState} from 'react'
import styles from '../styles/Contact.module.css'

const submitForm = (e) => {
  e.preventDefault();
  console.log(fname.value, email.value, phone.value, desc.value);
  const data = {fname, email, phone, desc};
  console.table(data)
}

const Contact = () => {
  const [fname, setfname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [desc, setdesc] = useState('');
  return (
    <div className={styles.container}>
      <form onSubmit={submitForm}>

        <label htmlFor="fname">Name</label>
        <input type="text" value={fname} onChange={(e) => setfname(e.value)} id="fname" name="fname" placeholder="Your name.." required />

        <label htmlFor="lname">Email</label>
        <input type="email" value={email} onChange={(e) => setemail(e.target.value)} id="email" name="email" placeholder="Your last name.." required />

        <label htmlFor="phone">Phone</label>
        <input type="text" value={phone} onChange={(e) => setphone(e.target.value)} id="phone" name="phone" placeholder="Your name.." required />

        <label htmlFor="desc">Description</label>
        <textarea id="desc" value={desc} onChange={(e) => setdesc(e.target.value)} name="desc" placeholder="Write something.." required ></textarea>

        <input type="submit" value="Submit" />

      </form>
    </div>
  )
}

export default Contact