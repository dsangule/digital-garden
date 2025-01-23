import fs from 'fs'
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'posts')

export function getPostData(fileName) {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const postData = {
        ...data,
        content
    }
    return postData;
}

export function getAllPosts() {
    const postFiles = fs.readdirSync(postsDirectory);
    
    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    })

    return allPosts;
}