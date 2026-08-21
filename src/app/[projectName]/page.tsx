interface Props {
  params: Promise<{
    projectName: string
  }>
}

export default async function ProjectPage({ params }: Props) {
  const { projectName } = await params

  return <div>{projectName}</div>
}
