export type Soal = {
  id: string
  deskripsi: string
  jawaban: string | number
  jawabans: number[]
}

export const data: {
  soal: Array<Soal>
} = {
  soal: [
    {
      id: '1',
      deskripsi: '1 + 1 ?',
      jawaban: 2,
      jawabans: [0, 1, 2, 3],
    },
    {
      id: '2',
      deskripsi: '1 * 1 ?',
      jawaban: 1,
      jawabans: [0, 1, 2, 3],
    },
    {
      id: '3',
      deskripsi: '1 / 1 ?',
      jawaban: 1,
      jawabans: [0, 1, 2, 3],
    },
    {
      id: '4',
      deskripsi: '1 % 1 ?',
      jawaban: 1,
      jawabans: [0, 1, 2, 3],
    },
    {
      id: '5',
      deskripsi: '1 ^ 1 ?',
      jawaban: 1,
      jawabans: [0, 1, 2, 3],
    },
  ],
}
