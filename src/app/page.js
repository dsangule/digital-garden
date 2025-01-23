import Hero from "@/components/Hero";
import Post from "@/components/Post";
import { getAllPosts } from "@/lib/posts-util";

export default function Home(props) {
  const allPosts = getAllPosts();

  return (
    <div>
      <Hero />
      <div className='bg-lime-200'>
        <div className="p-8">
          {allPosts.map((post, index) => {
            return <Post key={index} postData={post.content} />;
          })}
        </div>
        <h1 className="font-medium text-xl px-8 text-justify">
          Aute consequat velit est dolor. Ipsum ex pariatur velit deserunt
          fugiat nostrud eu incididunt sit non et. Commodo exercitation ipsum
          labore velit cupidatat sint reprehenderit. Ex eu quis veniam sint sunt
          aute mollit minim excepteur dolore dolor. Non ea aliquip laborum
          officia qui aliqua. Dolore ex enim sunt sunt amet eu cupidatat sint
          enim aliqua consectetur fugiat cupidatat. Dolore officia enim commodo
          eu consequat quis ut ipsum deserunt laboris enim. Aute sunt minim
          eiusmod proident cupidatat consequat reprehenderit ad. Minim proident
          enim nulla in. Eu nisi do veniam consequat laboris. Veniam ex in
          pariatur sit et sit nisi id sit velit id laboris. Incididunt nulla
          anim aliquip velit veniam Lorem amet qui fugiat commodo et commodo
          sit. Amet in fugiat elit proident ullamco. Sit anim quis ullamco
          pariatur deserunt pariatur ullamco culpa labore qui est mollit laborum
          nisi. Cillum minim culpa ex deserunt laborum. Qui ullamco excepteur
          velit id laboris dolor reprehenderit sunt dolore. Quis consequat
          incididunt reprehenderit Lorem magna consequat ad pariatur proident
          pariatur velit. Ut ex non esse ipsum deserunt excepteur incididunt non
          culpa do ipsum excepteur do. Lorem est sint adipisicing culpa id irure
          adipisicing ut elit. Qui esse cillum sunt excepteur ipsum id. Esse
          nisi nulla occaecat est duis ea occaecat elit minim nisi aute ut in
          tempor. Lorem ex pariatur laboris deserunt. Reprehenderit veniam culpa
          laboris ea. Incididunt cillum eu dolor pariatur qui qui cupidatat.
          Enim laborum aute et excepteur. Tempor aute qui irure sit consequat
          consectetur aliquip. Occaecat nisi Lorem sint voluptate eu ad
          deserunt. Ipsum magna pariatur reprehenderit laboris cupidatat dolore.
          Laborum eiusmod veniam dolore excepteur aliqua aliqua aute ea ullamco
          eu. Sint aute et sit occaecat pariatur consectetur deserunt eiusmod
          cupidatat. Commodo cillum occaecat eiusmod nulla ad. Labore consequat
          eiusmod nostrud consequat veniam consequat mollit do ea. Nisi ex enim
          commodo officia sunt in laboris non cillum. Anim esse pariatur enim
          Lorem minim nisi. Amet in occaecat cillum fugiat voluptate in.
          Consectetur sint duis laborum do. Aliquip non sunt nostrud anim tempor
          tempor minim aliqua ad eiusmod aliquip. Eu qui veniam commodo
          incididunt excepteur duis dolor culpa fugiat ea. Esse irure ullamco
          duis cillum mollit cupidatat ad duis ad non. Excepteur laborum ut
          ullamco proident adipisicing. Do eiusmod irure pariatur nisi
          reprehenderit deserunt ut deserunt adipisicing Lorem. Adipisicing
          labore ex voluptate id cillum velit ad sint elit magna. Ullamco eu
          incididunt est tempor laborum sit eiusmod voluptate quis eiusmod irure
          duis esse Lorem. Velit laboris tempor sint laboris enim. Deserunt
          consequat nulla consequat eiusmod eu eiusmod elit nulla. Aliqua elit
          sit Lorem ex nisi qui anim sint laborum nisi dolor ipsum aute. Quis
          occaecat laboris sint dolor eiusmod nisi. Magna elit mollit
          consectetur officia ex. Exercitation laborum nostrud ipsum sunt esse
          dolore nulla exercitation ex mollit. Aute nisi sit tempor laboris in
          cillum amet esse pariatur consequat minim. Excepteur adipisicing
          consequat mollit aliquip aute pariatur in elit elit ullamco ullamco
          sunt. In labore eu sunt nulla aute ex et adipisicing est labore.
          Laboris ex consequat enim laborum. Labore aliquip fugiat adipisicing
          do excepteur proident Lorem commodo veniam aute id elit ullamco
          consequat. Aute consequat velit est dolor. Ipsum ex pariatur velit
          deserunt fugiat nostrud eu incididunt sit non et. Commodo exercitation
          ipsum labore velit cupidatat sint reprehenderit. Ex eu quis veniam
          sint sunt aute mollit minim excepteur dolore dolor. Non ea aliquip
          laborum officia qui aliqua. Dolore ex enim sunt sunt amet eu cupidatat
          sint enim aliqua consectetur fugiat cupidatat. Dolore officia enim
          commodo eu consequat quis ut ipsum deserunt laboris enim. Aute sunt
          minim eiusmod proident cupidatat consequat reprehenderit ad. Minim
          proident enim nulla in. Eu nisi do veniam consequat laboris. Veniam ex
          in pariatur sit et sit nisi id sit velit id laboris. Incididunt nulla
          anim aliquip velit veniam Lorem amet qui fugiat commodo et commodo
          sit. Amet in fugiat elit proident ullamco. Sit anim quis ullamco
          pariatur deserunt pariatur ullamco culpa labore qui est mollit laborum
          nisi. Cillum minim culpa ex deserunt laborum. Qui ullamco excepteur
          velit id laboris dolor reprehenderit sunt dolore. Quis consequat
          incididunt reprehenderit Lorem magna consequat ad pariatur proident
          pariatur velit. Ut ex non esse ipsum deserunt excepteur incididunt non
          culpa do ipsum excepteur do. Lorem est sint adipisicing culpa id irure
          adipisicing ut elit. Qui esse cillum sunt excepteur ipsum id. Esse
          nisi nulla occaecat est duis ea occaecat elit minim nisi aute ut in
          tempor. Lorem ex pariatur laboris deserunt. Reprehenderit veniam culpa
          laboris ea. Incididunt cillum eu dolor pariatur qui qui cupidatat.
          Enim laborum aute et excepteur. Tempor aute qui irure sit consequat
          consectetur aliquip. Occaecat nisi Lorem sint voluptate eu ad
          deserunt. Ipsum magna pariatur reprehenderit laboris cupidatat dolore.
          Laborum eiusmod veniam dolore excepteur aliqua aliqua aute ea ullamco
          eu. Sint aute et sit occaecat pariatur consectetur deserunt eiusmod
          cupidatat. Commodo cillum occaecat eiusmod nulla ad. Labore consequat
          eiusmod nostrud consequat veniam consequat mollit do ea. Nisi ex enim
          commodo officia sunt in laboris non cillum. Anim esse pariatur enim
          Lorem minim nisi. Amet in occaecat cillum fugiat voluptate in.
          Consectetur sint duis laborum do. Aliquip non sunt nostrud anim tempor
          tempor minim aliqua ad eiusmod aliquip. Eu qui veniam commodo
          incididunt excepteur duis dolor culpa fugiat ea. Esse irure ullamco
          duis cillum mollit cupidatat ad duis ad non. Excepteur laborum ut
          ullamco proident adipisicing. Do eiusmod irure pariatur nisi
          reprehenderit deserunt ut deserunt adipisicing Lorem. Adipisicing
          labore ex voluptate id cillum velit ad sint elit magna. Ullamco eu
          incididunt est tempor laborum sit eiusmod voluptate quis eiusmod irure
          duis esse Lorem. Velit laboris tempor sint laboris enim. Deserunt
          consequat nulla consequat eiusmod eu eiusmod elit nulla. Aliqua elit
          sit Lorem ex nisi qui anim sint laborum nisi dolor ipsum aute. Quis
          occaecat laboris sint dolor eiusmod nisi. Magna elit mollit
          consectetur officia ex. Exercitation laborum nostrud ipsum sunt esse
          dolore nulla exercitation ex mollit. Aute nisi sit tempor laboris in
          cillum amet esse pariatur consequat minim. Excepteur adipisicing
          consequat mollit aliquip aute pariatur in elit elit ullamco ullamco
          sunt. In labore eu sunt nulla aute ex et adipisicing est labore.
          Laboris ex consequat enim laborum. Labore aliquip fugiat adipisicing
          do excepteur proident Lorem commodo veniam aute id elit ullamco
          consequat.
        </h1>
      </div>
    </div>
  );
}