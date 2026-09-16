export function estimateReadingTime(markdown: string): number {
  const plain = markdown
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/[#>*_`~-]/g, '')
  const chineseChars = plain.match(/[一-龥]/g)?.length ?? 0
  const otherWords = plain.replace(/[一-龥]/g, ' ').split(/\s+/).filter(Boolean).length
  const minutes = Math.round(chineseChars / 400 + otherWords / 200)
  return Math.max(1, minutes)
}
