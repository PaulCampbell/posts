import { promisify } from 'util';
import bodyParser from 'body-parser';
const getBody = promisify(bodyParser.urlencoded());

export async function getServerSideProps({ req, res }) {
  if (req.method === 'POST') {
    await getBody(req, res);
  }
  return {
    props: {
      title: req.body?.title || '',
    },
  };
}

export default function Post(props) {
  return (
    <main>
      <form action="/post" method="post">
        <input type="text" name="title" defaultValue={props.title} />
        <button type="submit">Submit</button>
        <span>{props.title}</span>
      </form>
    </main>
  );
}
