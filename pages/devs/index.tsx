import React from 'react'
import DevPage from '../../components/devs/dev-page/dev-page-main';
import classes from '../../components/devs/dev-page/dev-page.module.scss';

const MyDevsPage= () => {
  return (
    <div className={classes.main}>
      <h1>All Previous <span className={classes.color}>Developments</span></h1>
      <DevPage/>
    </div>
  )
}
// export const getStaticProps: GetStaticProps = () => {
//   const arr: any = [];
//   fetch("../../../devs-data.json")
//   .then(res => res.json())
//   .then(data => {
//     arr.push(data);
//   });
//    return {
//       props: {
//         devContents: arr
//       }
//     }
// }
export default MyDevsPage