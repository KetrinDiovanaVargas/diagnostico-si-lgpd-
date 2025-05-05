import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DiagnosticoForm() {
  const [step, setStep] = useState(1);
  const [perfil, setPerfil] = useState({
    cargo: "",
    experiencia: "",
    formacao: "",
    equipe: "",
    area: ""
  });
  const [sistemas, setSistemas] = useState({
    tipo: "",
    admin: false,
    defineNuvem: false
  });
  const [dados, setDados] = useState({
    funcionarios: false,
    clientes: false,
    operacoes: false,
    confidenciais: false
  });
  const [backup, setBackup] = useState({
    estrategia321: "",
    rpoRto: "",
    testeRestauracao: "",
    frequencia: "",
    criptografia: "",
    local: "",
    monitoramento: ""
  });
  const [iam, setIAM] = useState({
    rbac: "",
    menorPrivilegio: "",
    desprovisionamento: "",
    solucao: "",
    revisao: "",
    apisGerenciadas: ""
  });

  const cargosLideranca = ["Coordenador", "Gerente", "Diretor"];

  const handleNext = () => setStep(step + 1);
  const handleChange = (stateSetter, field, value) => stateSetter(prev => ({ ...prev, [field]: value }));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-4 p-6">
          <h1 className="text-lg font-semibold text-center">Diagnóstico de Segurança e LGPD</h1>

          {step === 13 && (dados.funcionarios || dados.clientes || dados.operacoes || dados.confidenciais) && (
            <div className="space-y-2">
              <h2 className="font-semibold text-center">Domínio de Risco: Backup</h2>
              <label>Possui estratégia 3-2-1 documentada?</label>
              <select className="w-full border rounded px-3 py-2" onChange={(e) => handleChange(setBackup, "estrategia321", e.target.value)}>
                <option value="">Selecione</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
              <label>Quais são os objetivos de RPO e RTO?</label>
              <Input onChange={(e) => handleChange(setBackup, "rpoRto", e.target.value)} />
              <label>Testes de restauração são realizados trimestralmente?</label>
              <select className="w-full border rounded px-3 py-2" onChange={(e) => handleChange(setBackup, "testeRestauracao", e.target.value)}>
                <option value="">Selecione</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
              <label>Frequência de backup</label>
              <select className="w-full border rounded px-3 py-2" onChange={(e) => handleChange(setBackup, "frequencia", e.target.value)}>
                <option value="">Selecione</option>
                <option value="hora">Hora em hora</option>
                <option value="diario">Diário</option>
                <option value="semanal">Semanal</option>
              </select>
              <label>Método de criptografia</label>
              <select className="w-full border rounded px-3 py-2" onChange={(e) => handleChange(setBackup, "criptografia", e.target.value)}>
                <option value="">Selecione</option>
                <option value="aes">AES-256</option>
                <option value="nenhum">Nenhum</option>
                <option value="outro">Outro</option>
              </select>
              <label>Local de armazenamento</label>
              <select className="w-full border rounded px-3 py-2" onChange={(e) => handleChange(setBackup, "local", e.target.value)}>
                <option value="">Selecione</option>
                <option value="local">Local</option>
                <option value="nuvem">Nuvem</option>
                <option value="hibrido">Híbrido</option>
              </select>
              <label>Sistema de monitoramento implementado?</label>
              <select className="w-full border rounded px-3 py-2" onChange={(e) => handleChange(setBackup, "monitoramento", e.target.value)}>
                <option value="">Selecione</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
              <Button onClick={handleNext} className="w-full">Próximo</Button>
            </div>
          )}

          {step === 14 && (dados.funcionarios || dados.clientes || dados.operacoes || dados.confidenciais) && (
            <div className="space-y-2">
              <h2 className="font-semibold text-center">Domínio de Risco: IAM (Gestão de Identidades)</h2>
              <label>RBAC (controle baseado em função) implementado?</label>
              <select className="w-full border rounded px-3 py-2" onChange={(e) => handleChange(setIAM, "rbac", e.target.value)}>
                <option value="">Selecione</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
              <label>Princípio do menor privilégio é seguido?</label>
              <select className="w-full border rounded px-3 py-2" onChange={(e) => handleChange(setIAM, "menorPrivilegio", e.target.value)}>
                <option value="">Selecione</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
              <label>Existe desprovisionamento automático de usuários?</label>
              <select className="w-full border rounded px-3 py-2" onChange={(e) => handleChange(setIAM, "desprovisionamento", e.target.value)}>
                <option value="">Selecione</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
              <label>Solução IAM utilizada</label>
              <select className="w-full border rounded px-3 py-2" onChange={(e) => handleChange(setIAM, "solucao", e.target.value)}>
                <option value="">Selecione</option>
                <option value="ad">Active Directory</option>
                <option value="aws">AWS IAM</option>
                <option value="azure">Azure AD</option>
                <option value="outra">Outra</option>
              </select>
              <label>Frequência de revisão de acessos</label>
              <select className="w-full border rounded px-3 py-2" onChange={(e) => handleChange(setIAM, "revisao", e.target.value)}>
                <option value="">Selecione</option>
                <option value="mensal">Mensal</option>
                <option value="trimestral">Trimestral</option>
                <option value="nunca">Nunca</option>
              </select>
              <label>Chaves de API e contas de serviço são gerenciadas?</label>
              <select className="w-full border rounded px-3 py-2" onChange={(e) => handleChange(setIAM, "apisGerenciadas", e.target.value)}>
                <option value="">Selecione</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
              <Button onClick={() => alert("Diagnóstico técnico finalizado.")} className="w-full">Finalizar Diagnóstico</Button>
            </div>
          )}

        </CardContent>
      </Card>
    </div>
  );
}
