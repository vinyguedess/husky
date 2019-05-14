import execa from 'execa'

export default function(): {
  topLevel: string
  gitDir: string
} {
  const { exitCode, stdout, stderr } = execa.sync(
    'git rev-parse --show-top-level --git-common-dir'
  )

  if (exitCode) {
    throw new Error(stderr)
  }

  const [topLevel, gitDir] = stdout.trim().split('\n')
  return { topLevel, gitDir }
}
