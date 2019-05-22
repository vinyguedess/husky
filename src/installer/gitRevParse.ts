import execa from 'execa'

export default function(): {
  topLevel: string
  gitDir: string
} {
  try {
    const { stdout } = execa.sync('git', [
      'rev-parse',
      '--show-toplevel',
      '--git-common-dir'
    ])

    const [topLevel, gitDir] = stdout.trim().split('\n')
    return { topLevel, gitDir }
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}
