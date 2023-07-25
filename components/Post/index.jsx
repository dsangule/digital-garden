import { ReactMarkdown } from "react-markdown/lib/react-markdown"

function Post({ postData }) {
  return (
    <div className='w-full rounded-md p-8 my-2 shadow-xl bg-white'>
      <ReactMarkdown className='prose'>
        {postData}
      </ReactMarkdown>
    </div>
  )
}

export default Post