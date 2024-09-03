import IndexClient from './IndexClient';

export async function generateMetadata() {
  return {
    title: 'title',
    description: 'description',
  };
}

export default function Index() {
  return <IndexClient />;
}
